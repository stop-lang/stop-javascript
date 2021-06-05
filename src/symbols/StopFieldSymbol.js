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
}
