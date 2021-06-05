import Scope from "./Scope.js";

export default class DynamicModelSymbol extends Scope {
    constructor(ctx, enclosingScope, defaultPackageName){
        super(enclosingScope);

        this.setNameWithPackage(ctx, ctx.model_type().getText(), defaultPackageName);
        this.sourceMapping = {};
    
        if (ctx.dynamic_source_mapping() != null){
            for (var parameterContextIndex in ctx.dynamic_source_mapping().dynamic_source_mapping_parameter()){
                var parameterContext = ctx.dynamic_source_mapping().dynamic_source_mapping_parameter()[parameterContextIndex];
                this.sourceMapping[parameterContext.ID().getText()] = parameterContext.dynamic_source_mapping_parameter_rename().getText();
            }
        }
    }
}
