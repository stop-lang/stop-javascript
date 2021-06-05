import antlr4 from 'antlr4';

import StopLexer from "./parser/StopLexer.js";
import StopParser from "./parser/StopParser.js";

import DefPhase from "./validation/DefPhase.js";
import RefPhase from "./validation/RefPhase.js";
import StopPhase from "./validation/StopPhase.js";

import ModelSymbol from "./symbols/ModelSymbol.js";
import EnumSymbol from "./symbols/EnumSymbol.js";
import StopFieldSymbol from "./symbols/StopFieldSymbol.js";

import State from "./models/State.js";
import Enumeration from "./models/Enumeration.js";
import Property from "./models/Property.js";

class AnnotatingErrorListener extends antlr4.error.ErrorListener {
    constructor(annotations){
        super();
        this.annotations = annotations;
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.annotations.push({
            row: line - 1,
            column: column,
            text: msg,
            type: "error"
        });
    }
}

export default class Stop {
    constructor(input){
        var stream = antlr4.CharStreams.fromString(input);
        var lexer = new StopLexer(stream);
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = new StopParser(tokens);
        var annotations = [];
        this.states = {};
        this.enumerations = {};
        
        var listener = new AnnotatingErrorListener(annotations);
        parser.removeErrorListeners();
        parser.addErrorListener(listener);
        var tree = parser.file();
        
        var defPhase = new DefPhase(listener);
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(defPhase, tree);
        this.handleErrors(listener, defPhase.errors);

        var refPhase = new RefPhase(listener, defPhase.globals, defPhase.scopes);
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(refPhase, tree);
        this.handleErrors(listener, refPhase.errors);

        var stopPhase = new StopPhase(listener, defPhase.globals, defPhase.scopes);
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(stopPhase, tree);
        this.handleErrors(listener, stopPhase.errors);

        if (annotations.length > 0){
            throw Error("invalid file");
        }

        for (var name in defPhase.globals.definitions){
            var symbol = defPhase.globals.definitions[name];
            if (symbol instanceof ModelSymbol){
                var type = State.Type.SYNC;
                if (symbol.start){
                    type = State.Type.START;
                }else if (symbol.stop){
                    type = State.Type.STOP;
                } else if (symbol.queue){
                    type = State.Type.QUEUE;
                }
                var state = new State(symbol.name, type);
                this.states[symbol.name] = state;
            }
            if (symbol instanceof EnumSymbol){
                var enumeration = new Enumeration(symbol.name, symbol.values);
                this.enumerations[symbol.name] = enumeration;
            }
        }

        for (var name in defPhase.globals.definitions){
            var symbol = defPhase.globals.definitions[name];
            if (symbol instanceof ModelSymbol){
                var state = this.states[name];

                if (!state){
                    throw Error("State " + name + " not found");
                }

                for (var i in symbol.transitions){
                    var transitionSymbol = symbol.transitions[i];
                    if (transitionSymbol){
                        var transitionState = this.states[transitionSymbol.name];
                        if (transitionState){
                            state.transitions[transitionSymbol.name] = transitionState;
                        }
                    }
                }

                for (var i in symbol.errors){
                    var errorSymbol = symbol.errors[i];
                    if (errorSymbol){
                        var errorState = this.states[errorSymbol.name];
                        if (errorState){
                            state.errors[errorSymbol.name] = errorState;
                        }
                    }
                }

                for (var i in symbol.enqueues){
                    var enqueueSymbol = symbol.enqueues[i];
                    if (enqueueSymbol){
                        var enqueueState = this.states[enqueueSymbol.name];
                        if (enqueueState){
                            state.enqueues[enqueueSymbol.name] = enqueueState;
                        }
                    }
                }

                if (symbol.returnSymbol != null){
                    state.returnType = symbol.returnSymbol.name;
                    state.returnCollection = symbol.returnSymbol.collection;
                    if (!symbol.returnSymbol.scalar){
                        var returnState = this.states[symbol.returnSymbol.name];
                        if (returnState){
                            state.returnState = returnState;
                        }else{
                            throw Error("State " + name + " not found");
                        }
                    }
                }

                for (var i in symbol.definitions){
                    var fieldSymbol = symbol.definitions[i];
                    if (fieldSymbol instanceof StopFieldSymbol){
                        var typeState = null;
                        var type = null;
                        if (!fieldSymbol.scalar){
                            typeState = this.states[fieldSymbol.typeName];
                            if (!typeState){
                                typeState = this.enumerations[fieldSymbol.typeName];
                                if (typeState){
                                    type = Property.Type.ENUM;
                                }else{
                                    typeState = this.enumerations[state.name + '.' +fieldSymbol.typeName];
                                    if (typeState){
                                        type = Property.Type.ENUM;
                                    }
                                }
                            }else{
                                type = Property.Type.STATE;
                            }
                        }else{
                            type = Property.Type[fieldSymbol.typeName.toUpperCase()];
                        }
                        var property = new Property(fieldSymbol.name, type, fieldSymbol.collection, fieldSymbol.optional, typeState);
                        
                        if (fieldSymbol.dynamicSource != null){
                            var providerState = this.states[fieldSymbol.dynamicSource.name];
                            if (providerState){
                                property.providerState = providerState;
                                property.providerStateMapping = fieldSymbol.dynamicSource.sourceMapping;
                            }else{
                                throw Error("State " + fieldSymbol.dynamicSource.name + " not found");
                            }
                        }

                        state.properties[property.name] = property;
                    }
                }
            }
        }
    }

    handleErrors(listener, errors){
        for (var errorIndex in errors){
            var error = errors[errorIndex];
            listener.annotations.push({
                row: error.line - 1,
                column: 0,
                text: error.message,
                type: "error"
            });
        }
    }
}
