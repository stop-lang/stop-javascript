import StopListener from "../parser/StopListener.js";
import Scope from "../symbols/Scope.js";
import ModelSymbol from "../symbols/ModelSymbol.js";
import ModelFieldSymbol from "../symbols/ModelFieldSymbol.js";
import ScalarFieldSymbol from "../symbols/ScalarFieldSymbol.js";
import CollectionFieldSymbol from "../symbols/CollectionFieldSymbol.js";
import TransitionSymbol from "../symbols/TransitionSymbol.js";
import ThrowSymbol from "../symbols/ThrowSymbol.js";
import EnumSymbol from "../symbols/EnumSymbol.js";
import EnqueueSymbol from "../symbols/EnqueueSymbol.js";
import DynamicModelSymbol from "../symbols/DynamicModelSymbol.js";

export default class DefPhase extends StopListener {
    constructor(listener) {
        super();
        this.errors = [];
        this.listener = listener;
        this.globals = undefined;
        this.scopes = [];
        this.currentScope = undefined;
        this.packageName = null;
    }

    saveScope(ctx, s) { 
        this.scopes[ctx] = s;
    }
    enterFile(ctx) { 
        this.globals = new Scope();
        this.currentScope = this.globals;
    }
    exitPackageDeclaration(ctx) {
        this.packageName = ctx.packageName().getText();
    }
    enterModel(ctx) { 
        if (ctx.MODEL_TYPE() == null){
            return;
        }  
        var modelSymbol = new ModelSymbol(ctx, this.currentScope, this.packageName);
        this.currentScope.define(modelSymbol);
        this.saveScope(ctx, modelSymbol);
        this.currentScope = modelSymbol;
    };
    exitModel(ctx) {
        var modelSymbol = this.currentScope;
        this.currentScope = modelSymbol.enclosingScope;
    };
    exitThrow_parameter(ctx) {
        var modelSymbol = this.currentScope;
        var throwSymbol = new ThrowSymbol(ctx, modelSymbol, this.packageName);
        modelSymbol.errors.push(throwSymbol);
    };
    enterEnumeration(ctx) {
        var enumSymbol = new EnumSymbol(ctx.enum_type(), this.currentScope, this.packageName);
        this.currentScope.define(enumSymbol);
        if (this.currentScope!=this.globals){
            this.globals.define(enumSymbol);
        }
        this.saveScope(ctx, enumSymbol);
        this.currentScope = enumSymbol;
    };
    exitEnumeration(ctx) {
        this.currentScope = this.currentScope.enclosingScope;
    };
    exitEnum_value(ctx) {
        var enumValue = ctx.MODEL_TYPE().getText();
        var enumSymbol = this.currentScope;
        enumSymbol.values.push(enumValue);
    };
    exitField(ctx) {
        var field = null;
        if (ctx.type() != null && ((ctx.type().model_type() != null) || (ctx.type().model_annotation()!=null))) {
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
    exitTransition(ctx) {
        var transitionSymbol = new TransitionSymbol(ctx, this.currentScope, this.packageName);
        this.currentScope.transitions.push(transitionSymbol);
    };
    exitEnqueue(ctx) {
        var enqueueSymbol = new EnqueueSymbol(ctx, this.currentScope, this.packageName);
        this.currentScope.enqueues.push(enqueueSymbol);
    };
}
