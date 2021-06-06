import Scope from "./Scope.js";

export default class TransitionSymbol extends Scope {
    constructor(ctx, enclosingScope, defaultPackageName){
        super(enclosingScope);
        this.name = "";
        this.annotation = false;

        if (ctx.model_annotation()!= null){
            this.annotation = true;
            this.name = ctx.model_annotation().model_type().getText();
        }else if (ctx.model_type()!=null) {
            this.name = ctx.model_type().getText();
        }
        
        this.setNameWithPackage(ctx, this.name, defaultPackageName);
    }
}
