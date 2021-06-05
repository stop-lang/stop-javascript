import Scope from "./Scope.js";

export default class TransitionSymbol extends Scope {
    constructor(ctx, enclosingScope, defaultPackageName){
        super(enclosingScope);
        this.setNameWithPackage(ctx, ctx.model_type().getText(), defaultPackageName);
    }
}
