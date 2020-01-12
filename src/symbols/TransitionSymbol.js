const Scope = require("./Scope");

var TransitionSymbol = function(ctx, enclosingScope, defaultPackageName){
	this.setNameWithPackage(ctx, ctx.model_type().getText(), defaultPackageName);
    this.enclosingScope = enclosingScope;
    this.definitions = {};
};
TransitionSymbol.prototype = Object.create(Scope.prototype);
TransitionSymbol.prototype.constructor = TransitionSymbol;

module.exports = TransitionSymbol;