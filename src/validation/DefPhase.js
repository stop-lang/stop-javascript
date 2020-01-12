const StopListener = require("../parser/StopListener");
const Scope = require("../symbols/Scope");
const ModelSymbol = require("../symbols/ModelSymbol");
const ModelFieldSymbol = require("../symbols/ModelFieldSymbol");
const ScalarFieldSymbol = require("../symbols/ScalarFieldSymbol");
const CollectionFieldSymbol = require("../symbols/CollectionFieldSymbol");
const TransitionSymbol = require("../symbols/TransitionSymbol");
const ThrowSymbol = require("../symbols/ThrowSymbol");
const EnumSymbol = require("../symbols/EnumSymbol");
const DynamicModelSymbol = require("../symbols/DynamicModelSymbol");

var DefPhase = function(listener) {
    StopListener.StopListener.call(this); // inherit default listener
    this.errors = [];
    this.listener = listener;
    this.globals = undefined;
    this.scopes = [];
    this.currentScope = undefined;
    this.packageName = null;
    return this;
};
DefPhase.prototype = Object.create(StopListener.StopListener.prototype);
DefPhase.prototype.constructor = DefPhase;
DefPhase.prototype.saveScope = function(ctx, s) { 
    this.scopes[ctx] = s;
};
DefPhase.prototype.enterFile = function(ctx) { 
    this.globals = new Scope();
    this.currentScope = this.globals;
};
DefPhase.prototype.exitPackageDeclaration = function(ctx) {
    this.packageName = ctx.packageName().getText();
};
DefPhase.prototype.enterModel = function(ctx) { 
    if (ctx.MODEL_TYPE() == null){
        return;
    }  
    var modelSymbol = new ModelSymbol(ctx, this.currentScope, this.packageName);
    this.currentScope.define(modelSymbol);
    this.saveScope(ctx, modelSymbol);
    this.currentScope = modelSymbol;
};
DefPhase.prototype.exitModel = function(ctx) {
    var modelSymbol = this.currentScope;
    this.currentScope = modelSymbol.enclosingScope;
};
DefPhase.prototype.exitThrow_parameter = function(ctx) {
    var modelSymbol = this.currentScope;
    var throwSymbol = new ThrowSymbol(ctx, modelSymbol, this.packageName);
    modelSymbol.errors.push(throwSymbol);
};
DefPhase.prototype.enterEnumeration = function(ctx) {
    var enumSymbol = new EnumSymbol(ctx.enum_type(), this.currentScope, this.packageName);
    this.currentScope.define(enumSymbol);
    if (this.currentScope!=this.globals){
        this.globals.define(enumSymbol);
    }
    this.saveScope(ctx, enumSymbol);
    this.currentScope = enumSymbol;
};
DefPhase.prototype.exitEnumeration = function(ctx) {
    this.currentScope = this.currentScope.enclosingScope;
};
DefPhase.prototype.exitEnum_value = function(ctx) {
    var enumValue = ctx.MODEL_TYPE().getText();
    var enumSymbol = this.currentScope;
    enumSymbol.values.push(enumValue);
};
DefPhase.prototype.exitField = function(ctx) {
    var field = null;
    if (ctx.type() != null && ctx.type().model_type() != null) {
        field = new ModelFieldSymbol(ctx, this.packageName);
    }else if (ctx.type()!=null && ctx.type().scalar_type() != null){
        field = new ScalarFieldSymbol(ctx, this.packageName);
    }else if (ctx.collection() != null && ctx.collection().type() != null){
        field = new CollectionFieldSymbol(ctx, this.packageName);
    }
    if(field != null){
        if (ctx.dynamic_source() != null){
            field.dynamicSource = new DynamicModelSymbol(ctx.dynamic_source(), this.currentScope, this.packageName);
        }
        field.optional = ctx.OPTIONAL() != null;
        this.currentScope.define(field);
    }
};
DefPhase.prototype.exitTransition = function(ctx) {
    var transitionSymbol = new TransitionSymbol(ctx, this.currentScope, this.packageName);
    this.currentScope.transitions.push(transitionSymbol);
};
DefPhase.prototype.exitEnqueue = function(ctx) {
    var enqueueSymbol = new EnqueueSymbol(ctx, this.currentScope, this.packageName);
    this.currentScope.enqueues.push(enqueueSymbol);
};

module.exports = DefPhase;