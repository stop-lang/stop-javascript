const Scope = require("./Scope");
const ReturnSymbol = require("./ReturnSymbol");

var ModelSymbol = function(ctx, enclosingScope, defaultPackageName){
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
    this.enclosingScope = enclosingScope;
    this.definitions = {};

    if (ctx.return_type()!=null){
        this.returnSymbol = new ReturnSymbol(ctx.return_type(), enclosingScope, this.packageName);
    }
};
ModelSymbol.prototype = Object.create(Scope.prototype);
ModelSymbol.prototype.constructor = ModelSymbol;

module.exports = ModelSymbol;