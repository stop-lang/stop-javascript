import Scope from "./Scope.js";
import ReturnSymbol from "./ReturnSymbol.js";

export default class ModelSymbol extends Scope {
    constructor(ctx, enclosingScope, defaultPackageName){
        super(enclosingScope);

        this.setNameWithPackage(ctx, ctx.MODEL_TYPE().getText(), defaultPackageName);
        this.stop = ctx.STOP() != null;
        this.start = ctx.START() != null;
        this.queue = ctx.QUEUE() != null;
        this.returnSymbol = undefined;
        this.errors = [];
        this.transitions = [];
        this.enqueues = [];
        this.timeout = 0;
        this.line = ctx.start.line;
    
        if (ctx.return_type()!=null){
            this.returnSymbol = new ReturnSymbol(ctx.return_type(), enclosingScope, this.packageName);
        }
    }
}
