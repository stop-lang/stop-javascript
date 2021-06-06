import Scope from "./Scope.js";

export default class ReturnSymbol extends Scope {
    constructor(ctx, enclosingScope, defaultPackageName){
        super(enclosingScope);

        this.line = ctx.start.line;
    
        this.scalar = false;
        this.packageName = defaultPackageName;
        this.collection = ctx.return_type().collection() != null;
        this.annotation = false;
    
        var name = null;

        if (ctx.return_type().collection() != null) {
            if (ctx.return_type().collection().type() != null) {
                if (ctx.return_type().collection().type().model_annotation()!=null) {
                    name = ctx.return_type().collection().type().model_annotation().model_type().getText();
                    this.annotation = true;
                    if (!this.isReference(name)) {
                        if (this.packageName != null) {
                            name = this.packageName + "." + name;
                        }
                    }
                }else if (ctx.return_type().collection().type().model_type()!=null) {
                    name = ctx.return_type().collection().type().getText();
                    if (!this.isReference(name)) {
                        if (this.packageName != null) {
                            name = this.packageName + "." + name;
                        }
                    }
                }else{
                    this.scalar = true;
                    name = ctx.return_type().collection().type().scalar_type().getText();
                }
            }
        }else if(ctx.return_type().type() != null){
            if (ctx.return_type().type().model_annotation()!=null) {
                name = ctx.return_type().type().model_annotation().model_type().getText();
                this.annotation = true;
                if (!this.isReference(name)) {
                    if (this.packageName != null) {
                        name = this.packageName + "." + name;
                    }
                }
            }else if (ctx.return_type().type().model_type()!=null) {
                name = ctx.return_type().type().getText();
                if (!this.isReference(name)) {
                    if (this.packageName != null) {
                        name = this.packageName + "." + name;
                    }
                }
            }else{
                this.scalar = true;
                name = ctx.return_type().type().scalar_type().getText();
            }
        }
    
        this.name = name;
    }

    isReference(name){
        return name.indexOf(".") >= 0;
    }
}
