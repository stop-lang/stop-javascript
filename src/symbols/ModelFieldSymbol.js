import StopFieldSymbol from "./StopFieldSymbol.js";

export default class ModelFieldSymbol extends StopFieldSymbol {
	constructor(ctx, defaultPackageName){
		var typeName = ctx.type().model_type().getText();
		var scalar = false;
		super(ctx, ctx.ID().getText(), typeName, scalar, defaultPackageName);
	}
}
