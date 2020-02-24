const antlr4 = require("antlr4");
const StopLexer = require("./parser/StopLexer");
const StopParser = require("./parser/StopParser");

const DefPhase = require("./validation/DefPhase");
const RefPhase = require("./validation/RefPhase");
const StopPhase = require("./validation/StopPhase");

const ModelSymbol = require("./symbols/ModelSymbol");
const EnumSymbol = require("./symbols/EnumSymbol");
const StopFieldSymbol = require("./symbols/StopFieldSymbol");

const StateType = require("./models/StateType");
const State = require("./models/State");
const Enumeration = require("./models/Enumeration");
const Property = require("./models/Property");
const StateInstance = require("./models/StateInstance");
const EnumerationInstance = require("./models/EnumerationInstance");

var AnnotatingErrorListener = function(annotations) {
    antlr4.error.ErrorListener.call(this);
    this.annotations = annotations;
    return this;
};
AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;
AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error"
 });
};

function Stop(input){
	var stream = antlr4.CharStreams.fromString(input);
    var lexer = new StopLexer.StopLexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new StopParser.StopParser(tokens);
    var annotations = [];
    this.states = {};
    this.enumerations = {};
    
    var listener = new AnnotatingErrorListener(annotations);
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    var tree = parser.file();
    
    var defPhase = new DefPhase(listener);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(defPhase, tree);
    handleErrors(listener, defPhase.errors);

    var refPhase = new RefPhase(listener, defPhase.globals, defPhase.scopes);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(refPhase, tree);
    handleErrors(listener, refPhase.errors);

    var stopPhase = new StopPhase(listener, defPhase.globals, defPhase.scopes);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(stopPhase, tree);
    handleErrors(listener, stopPhase.errors);

    if (annotations.length > 0){
        throw Error("invalid file");
    }

    for (var name in defPhase.globals.definitions){
        var symbol = defPhase.globals.definitions[name];
        if (symbol instanceof ModelSymbol){
            var type = StateType.SYNC;
            if (symbol.start){
                type = StateType.START;
            }else if (symbol.stop){
                type = StateType.STOP;
            } else if (symbol.queue){
                type = StateType.QUEUE;
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
                                type = Property.PropertyType.ENUM;
                            }else{
                                typeState = this.enumerations[state.name + '.' +fieldSymbol.typeName];
                                if (typeState){
                                    type = Property.PropertyType.ENUM;
                                }
                            }
                        }else{
                            type = Property.PropertyType.STATE;
                        }
                    }else{
                        type = Property.PropertyType[fieldSymbol.typeName.toUpperCase()];
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

function handleErrors(listener, errors){
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

Stop.models = {
    'StateType': StateType,
    'State': State,
    'Enumeration': Enumeration,
    'Property': Property,
    'StateInstance': StateInstance,
    'EnumerationInstance': EnumerationInstance
};

module.exports = Stop;