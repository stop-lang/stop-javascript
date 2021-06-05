import StopListener from "../parser/StopListener.js";
import ModelSymbol from "../symbols/ModelSymbol.js";

export default class StopPhase extends StopListener {
    constructor(listener, globals, scopes) {
        super();
        this.errors = [];
        this.listener = listener;
        this.globals = globals;
        this.scopes = scopes;
        this.currentScope = undefined;
        this.packageName = null;
    }

    enterFile(ctx) {
        this.currentScope = this.globals;
    }
    exitPackageDeclaration(ctx) {
        this.packageName = ctx.packageName().getText();
    }
    enterModel(ctx) {
        this.currentScope = this.globals.definitions[ctx.MODEL_TYPE().getText()];
    }
    exitModel(ctx) {
        this.currentScope = this.currentScope.enclosingScope;
    }
    findStop(modelSymbol) {
        if (modelSymbol.stop){
            return true;
        }
    
        var transitions = [].concat(modelSymbol.transitions, modelSymbol.errors);
    
        if (transitions.length == 0){
            return false;
        }
    
        var foundStop = true;
    
        for (var transitionIndex in transitions){
            var transitionSymbol = transitions[transitionIndex];
            var symbol = this.globals.definitions[transitionSymbol.name];
            if(symbol != undefined) {
                if (symbol instanceof ModelSymbol){
                    if (!this.findStop(symbol)){
                        foundStop = false;
                    }
                }else{
                    foundStop = false;
                }
            }else {
                foundStop = false;
            }
        }
    
        return foundStop;
    }
    validateTransition(modelName) {
        var symbol = this.globals.definitions[modelName];
        if(symbol != undefined) {
            if (symbol instanceof ModelSymbol){
                var modelSymbol = symbol;
                var valid = this.findStop(modelSymbol);
                if (!valid){
                    var lineScope = this.getEnclosingScopeWithLine(this.currentScope);
                    var line = 1;
                    if (lineScope){
                        line = lineScope.line;
                    }
                    this.errors.push({line: line, message: "Couldn't define transition \""+
                            modelName +"\" because a stopping state could not be reached"});
                }
            }
        }else{
            var lineScope = this.getEnclosingScopeWithLine(this.currentScope);
            var line = 1;
            if (lineScope){
                line = lineScope.line;
            }
            this.errors.push({line: line, message: "Couldn't define transition because " + modelName + " isn't defined"});
        }
    }
    exitThrow_parameter(ctx) {
        var type = ctx.model_type().getText();
        this.validateTransition(type);
    }
    exitTransition(ctx) {
        var type = ctx.model_type().getText();
        this.validateTransition(type);
    }
    exitEnqueue(ctx) {
        var type = ctx.model_type().getText();
        this.validateTransition(type);
    }
    getEnclosingScopeWithLine(scope){
        if (scope.line){
            return scope;
        }
        if (scope.enclosingScope){
            return this.getEnclosingScopeWithLine(scope.enclosingScope);
        }
        return undefined;
    }
}
