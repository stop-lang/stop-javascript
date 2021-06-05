import StopFieldSymbol from "./StopFieldSymbol.js";

export default class CollectionFieldSymbol extends StopFieldSymbol {
	constructor(ctx, defaultPackageName){
		var typeName = ctx.collection().type().getText();
	    var scalar = ctx.collection().type().scalar_type() != null;
		super(ctx, ctx.ID().getText(), typeName, scalar, defaultPackageName);
        this.collection = true;
	}
}
