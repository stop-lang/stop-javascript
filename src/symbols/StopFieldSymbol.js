import Scope from "./Scope.js";
import StopParser from "../parser/StopParser.js";

export default class StopFieldSymbol extends Scope {
    constructor(ctx, name, typeName, scalar, defaultPackageName){
        super(undefined);

        this.name = name;
        this.typeName = typeName;
        this.packageName = defaultPackageName;
        this.scalar = scalar;
        this.optional = false;
        this.collection = false;
        this.dynamicSource = null;
        this.annotation = false;
        this.validations = {};

        if (ctx.type()!=null && ctx.type().model_annotation()!=null){
            this.typeName = ctx.type().model_annotation().model_type().getText();
            this.annotation = true;
        }else if (ctx.collection()!=null && ctx.collection().type()!=null && ctx.collection().type().model_annotation()!=null){
            this.annotation = true;
            this.typeName = ctx.collection().type().model_annotation().model_type().getText();
        }
    
        if (!this.isReference(name) && !scalar){
            if (ctx.parentCtx != null){
                var p = ctx.parentCtx.getChild(0);
                if (p!=null && (p instanceof StopParser.PackageDeclarationContext)){
                    this.packageName = p.packageName().getText();
                }
            }
    
            if (this.packageName!=null){
                this.typeName = this.packageReference(this.packageName, this.typeName);
            }
        }
    }

    addValidation(validationSymbol){
        this.validations[validationSymbol.name] = validationSymbol;
    }
}
