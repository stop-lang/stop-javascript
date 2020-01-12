const Scope = require("./Scope");

var ThrowSymbol = function(ctx, enclosingScope, defaultPackageName){
	this.setNameWithPackage(ctx, ctx.model_type().getText(), defaultPackageName);
    this.enclosingScope = enclosingScope;
    this.definitions = {};
};
ThrowSymbol.prototype = Object.create(Scope.prototype);
ThrowSymbol.prototype.constructor = ThrowSymbol;

module.exports = ThrowSymbol;