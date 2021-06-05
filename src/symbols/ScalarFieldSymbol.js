import StopFieldSymbol from "./StopFieldSymbol.js";

export default class ScalarFieldSymbol extends StopFieldSymbol {
	constructor(ctx, defaultPackageName){
		var typeName = ctx.type().scalar_type().getText();
		var scalar = true;
		super(ctx, ctx.ID().getText(), typeName, scalar, defaultPackageName);
	}
}
