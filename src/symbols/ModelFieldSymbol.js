const StopFieldSymbol = require("./StopFieldSymbol");

var ModelFieldSymbol = function(ctx, defaultPackageName){
	var typeName = ctx.type().model_type().getText();
	var scalar = false;
    StopFieldSymbol.call(this, ctx, ctx.ID().getText(), typeName, scalar, defaultPackageName);
};
ModelFieldSymbol.prototype = Object.create(StopFieldSymbol.prototype);
ModelFieldSymbol.prototype.constructor = ModelFieldSymbol;

module.exports = ModelFieldSymbol;