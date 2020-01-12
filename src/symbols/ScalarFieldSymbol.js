const StopFieldSymbol = require("./StopFieldSymbol");

var ScalarFieldSymbol = function(ctx, defaultPackageName){
	var typeName = ctx.type().scalar_type().getText();
	var scalar = true;
    StopFieldSymbol.call(this, ctx, ctx.ID().getText(), typeName, scalar, defaultPackageName);
};
ScalarFieldSymbol.prototype = Object.create(StopFieldSymbol.prototype);
ScalarFieldSymbol.prototype.constructor = ScalarFieldSymbol;

module.exports = ScalarFieldSymbol;