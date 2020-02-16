const StopListener = require("../parser/StopListener");
const StopFieldSymbol = require("../symbols/StopFieldSymbol");
const ReturnSymbol = require("../symbols/ReturnSymbol");
const EnumSymbol = require("../symbols/EnumSymbol");
const ModelFieldSymbol = require("../symbols/ModelFieldSymbol");

var RefPhase = function(listener, globals, scopes) {
    StopListener.StopListener.call(this); // inherit default listener
    this.errors = [];
    this.listener = listener;
    this.globals = globals;
    this.scopes = scopes;
    this.currentScope = undefined;
    this.packageName = null;
    return this;
};
RefPhase.prototype = Object.create(StopListener.StopListener.prototype);
RefPhase.prototype.constructor = RefPhase;
RefPhase.prototype.enterFile = function(ctx) {
    this.currentScope = this.globals;
};
RefPhase.prototype.exitPackageDeclaration = function(ctx) {
    this.packageName = ctx.packageName().getText();
};
RefPhase.prototype.enterModel = function(ctx) {
    this.currentScope = this.globals.definitions[ctx.MODEL_TYPE().getText()];
};
RefPhase.prototype.exitModel = function(ctx) {
    this.currentScope = this.currentScope.enclosingScope;

};
RefPhase.prototype.exitField = function(ctx) {
    var symbol = this.currentScope.definitions[ctx.ID().getText()];
    if (symbol instanceof StopFieldSymbol){
        if (!symbol.scalar){
            if (!this.validateType(symbol.typeName)){
                this.reportError("Couldn't define field \""+
                symbol.name +"\" because " + symbol.typeName + " isn't defined");
            }
        }
        if (symbol.dynamicSource != null){
            var dynamicSymbol = symbol.dynamicSource;
            if (!this.validateType(dynamicSymbol.name)){
                this.reportError("Couldn't define field \""+ symbol.name +"\" because dynamic source " + dynamicSymbol.name + " isn't defined");
            } else {
                var dynamicModelSymbol = this.globals.definitions[dynamicSymbol.name];
                for (var dynamicParameterName in dynamicSymbol.sourceMapping){
                    var dynamicParameterSymbol = dynamicModelSymbol.definitions[dynamicParameterName];
                    if (dynamicParameterSymbol){
                        var parameterName = dynamicSymbol.sourceMapping[dynamicParameterName];
                        var parameterSymbol = this.getReference(this.currentScope, parameterName, dynamicParameterSymbol.optional);
                        if (!parameterSymbol){
                            this.reportError("Couldn't define field \""+ symbol.name +"\" because dynamic source " + dynamicSymbol.name + " mapping parameter value \""+parameterName+"\" isn't defined");
                        }else{
                            if (dynamicParameterSymbol.collection != parameterSymbol.collection){
                                this.reportError("Couldn't define field \""+ symbol.name +"\" because dynamic source " + dynamicSymbol.name + " mapping parameter \""+dynamicParameterName+"\" with collection " + dynamicParameterSymbol.collection + " doesn't match collection "+ parameterSymbol.collection);
                            }
                            if (dynamicParameterSymbol.typeName != parameterSymbol.typeName){
                                this.reportError("Couldn't define field \""+ symbol.name +"\" because dynamic source " + dynamicSymbol.name + " mapping parameter \""+dynamicParameterName+"\" with type " + dynamicParameterSymbol.typeName + " doesn't match type "+ parameterSymbol.typeName);
                            }
                        }
                    }else{
                        this.reportError("Couldn't define field \""+ symbol.name +"\" because dynamic source " + dynamicSymbol.name + " mapping parameter \""+dynamicParameterName+"\" isn't defined");
                    }
                }
            }
        }
    }
};
RefPhase.prototype.getReference = function(modelSymbol, parameterName, optional) {
    var isReference = parameterName.indexOf(".") > 0;
    if (isReference){
        var name = parameterName.split(".")[0];
        var modelFieldSymbol = modelSymbol.definitions[name];
        if (modelFieldSymbol 
            && !modelFieldSymbol.collection 
            && (modelFieldSymbol instanceof ModelFieldSymbol)){
            if (!optional && modelFieldSymbol.optional){
                return null;
            }
            var referenceModelSymbol = this.globals.definitions[modelFieldSymbol.typeName];
            if ( referenceModelSymbol ){
                var referenceSplits = parameterName.split(".");
                var subParameterName = referenceSplits.slice(1,referenceSplits.length).join(".");
                return this.getReference(referenceModelSymbol, subParameterName, optional);
            }
        }
        return null;
    }
    var symbol = modelSymbol.definitions[parameterName];
    if (symbol && ((symbol.optional==optional) || !symbol.optional)){
        return symbol;
    }
    return null;
};
RefPhase.prototype.exitThrow_parameter = function(ctx) {
    var type = ctx.model_type().getText();
    if (!this.validateType(type)){
        this.reportError("Couldn't define thrown error because \""+
        type +"\" isn't defined");
    }
};
RefPhase.prototype.exitTransition = function(ctx) {
    var type = ctx.model_type().getText();
    if (!this.validateType(type)){
        this.reportError("Couldn't define transition because \""+
        type +"\" isn't defined");
    }
};
RefPhase.prototype.exitEnqueue = function(ctx) {
    var type = ctx.model_type().getText();
    if (!this.validateType(type)){
        this.reportError("Couldn't define enqueue because \""+
        type +"\" isn't defined");
    }
};
RefPhase.prototype.exitReturn_type = function(ctx) {
    var symbol = this.currentScope.returnSymbol;
    if ((symbol instanceof ReturnSymbol) && !symbol.scalar){
        if (!this.validateType(symbol.name)){
            this.reportError("Couldn't define return because \""+
        symbol.name +"\" isn't defined");
        }
    }
};
RefPhase.prototype.validateType = function(name) {
    var globalRef = this.globals.definitions[name];
    if (globalRef!=undefined){
        return true;
    }
    var localRef = this.currentScope.definitions[this.currentScope.name + "." + name];
    if ((localRef != undefined)  && (localRef instanceof EnumSymbol)){
        return true;
    }
    return false;
};
RefPhase.prototype.reportError = function(message) {
    var lineScope = this.getEnclosingScopeWithLine(this.currentScope);
    var line = 1;
    if (lineScope){
        line = lineScope.line;
    }
    this.errors.push({line: line, message: message});
};
RefPhase.prototype.getEnclosingScopeWithLine = function(scope){
    if (scope.line){
        return scope;
    }
    if (scope.enclosingScope){
        return this.getEnclosingScopeWithLine(scope.enclosingScope);
    }
    return undefined;
};

module.exports = RefPhase;