const StopListener = require("../parser/StopListener");
const ModelSymbol = require("../symbols/ModelSymbol");

var StopPhase = function(listener, globals, scopes) {
    StopListener.StopListener.call(this); // inherit default listener
    this.errors = [];
    this.listener = listener;
    this.globals = globals;
    this.scopes = scopes;
    this.currentScope = undefined;
    this.packageName = null;
    return this;
};
StopPhase.prototype = Object.create(StopListener.StopListener.prototype);
StopPhase.prototype.constructor = StopPhase;
StopPhase.prototype.enterFile = function(ctx) {
    this.currentScope = this.globals;
};
StopPhase.prototype.exitPackageDeclaration = function(ctx) {
    this.packageName = ctx.packageName().getText();
};
StopPhase.prototype.enterModel = function(ctx) {
    this.currentScope = this.globals.definitions[ctx.MODEL_TYPE().getText()];
};
StopPhase.prototype.exitModel = function(ctx) {
    this.currentScope = this.currentScope.enclosingScope;
};
StopPhase.prototype.findStop = function(modelSymbol) {
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
};
StopPhase.prototype.validateTransition = function(modelName) {
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
};
StopPhase.prototype.exitThrow_parameter = function(ctx) {
    var type = ctx.model_type().getText();
    this.validateTransition(type);
};
StopPhase.prototype.exitTransition = function(ctx) {
    var type = ctx.model_type().getText();
    this.validateTransition(type);
};
StopPhase.prototype.exitEnqueue = function(ctx) {
    var type = ctx.model_type().getText();
    this.validateTransition(type);
};
StopPhase.prototype.getEnclosingScopeWithLine = function(scope){
    if (scope.line){
        return scope;
    }
    if (scope.enclosingScope){
        return this.getEnclosingScopeWithLine(scope.enclosingScope);
    }
    return undefined;
};

module.exports = StopPhase;