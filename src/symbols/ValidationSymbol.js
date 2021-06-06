import Scope from "./Scope.js";

export default class ValidationSymbol extends Scope {
    constructor(name, statementContext, packageName){
        super(undefined);
        
        this.name = name;
        this.parameters = {};
        
        if (statementContext.state_validation()!= null){
            var modelName;
            if (statementContext.state_validation().model_annotation()!= null){
                modelName = statementContext.state_validation().model_annotation().getText();
            }else {
                modelName = statementContext.state_validation().model_type().getText();
            }
            if ((modelName.indexOf(".")<0) && (packageName!=null)){
                modelName = packageName +"." + modelName;
            }
            this.parameters["kind"] = modelName;
        }else{
            for ( var i = 0; i < statementContext.validation().validation_parameters().validation_parameter().length; i++){
                let parameterContext = statementContext.validation().validation_parameters().validation_parameter()[i];
                if (parameterContext.validation_parameter_value().NUMBER()!=null){
                    this.parameters[parameterContext.ID().getText()] = parseFloat(parameterContext.validation_parameter_value().NUMBER().getText());
                }else{
                    let valueString = parameterContext.validation_parameter_value().STRING().getText();
                    this.parameters[parameterContext.ID().getText()] = valueString.substring(1,valueString.length-1);
                }
            }
        }
    }
}
