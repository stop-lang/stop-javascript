const StopFieldSymbol = require("./StopFieldSymbol");

var CollectionFieldSymbol = function(ctx, defaultPackageName){
	var typeName = ctx.collection().type().getText();
	var scalar = ctx.collection().type().scalar_type() != null;
    StopFieldSymbol.call(this, ctx, ctx.ID().getText(), typeName, scalar, defaultPackageName);
    this.collection = true;
};
CollectionFieldSymbol.prototype = Object.create(StopFieldSymbol.prototype);
CollectionFieldSymbol.prototype.constructor = CollectionFieldSymbol;

module.exports = CollectionFieldSymbol;