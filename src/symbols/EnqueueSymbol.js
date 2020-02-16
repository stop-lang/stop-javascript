const Scope = require("./Scope");

var EnqueueSymbol = function(ctx, enclosingScope, defaultPackageName){
    this.setNameWithPackage(ctx, ctx.model_type().getText(), defaultPackageName);
    this.enclosingScope = enclosingScope;
    this.definitions = {};
};
EnqueueSymbol.prototype = Object.create(Scope.prototype);
EnqueueSymbol.prototype.constructor = EnqueueSymbol;

module.exports = EnqueueSymbol;