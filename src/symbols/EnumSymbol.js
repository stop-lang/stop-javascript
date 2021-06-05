import Scope from "./Scope.js";
import StopParser from "../parser/StopParser.js";

export default class EnumSymbol extends Scope {
    constructor(ctx, enclosingScope, defaultPackageName){
        super(enclosingScope);

        this.values = [];
        this.canonical = false;
        this.name = ctx.MODEL_TYPE().getText();
    
        if (ctx.parentCtx.parentCtx instanceof StopParser.FileContext) {
            this.canonical = true;
            var p = ctx.parentCtx.parentCtx.getChild(0);
            if (p != null && (p instanceof StopParser.PackageDeclarationContext)) {
                var packageName = p.packageName().getText();
                this.name = this.packageReference(this.packageName, this.name);
            } else if (defaultPackageName!=null){
                this.name = this.packageReference(defaultPackageName, this.name);
            }
        }else{
            this.name = this.modelReference(enclosingScope, this.name);
        }
    }
}
