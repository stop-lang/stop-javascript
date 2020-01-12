const Scope = require("./Scope");

var DynamicModelSymbol = function(ctx, enclosingScope, defaultPackageName){
	this.setNameWithPackage(ctx, ctx.model_type().getText(), defaultPackageName);
    this.enclosingScope = enclosingScope;
    this.definitions = {};
    this.sourceMapping = {};

    if (ctx.dynamic_source_mapping() != null){
    	for (var parameterContextIndex in ctx.dynamic_source_mapping().dynamic_source_mapping_parameter()){
    		var parameterContext = ctx.dynamic_source_mapping().dynamic_source_mapping_parameter()[parameterContextIndex];
    		this.sourceMapping[parameterContext.ID().getText()] = parameterContext.dynamic_source_mapping_parameter_rename().getText();
    	}
    }
};
DynamicModelSymbol.prototype = Object.create(Scope.prototype);
DynamicModelSymbol.prototype.constructor = DynamicModelSymbol;

module.exports = DynamicModelSymbol;