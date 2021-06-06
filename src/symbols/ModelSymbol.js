import Scope from "./Scope.js";
import ReturnSymbol from "./ReturnSymbol.js";

export default class ModelSymbol extends Scope {
    constructor(ctx, enclosingScope, defaultPackageName){
        super(enclosingScope);

        this.setNameWithPackage(ctx, ctx.MODEL_TYPE().getText(), defaultPackageName);
        this.stop = ctx.STOP() != null;
        this.start = ctx.START() != null;
        this.queue = ctx.QUEUE() != null;
        this.returnSymbol = undefined;
        this.errors = [];
        this.transitions = [];
        this.enqueues = [];
        this.timeout = 0;
        this.line = ctx.start.line;
        this.annotations = ctx.annotation();
    
        if (ctx.return_type()!=null){
            this.returnSymbol = new ReturnSymbol(ctx, enclosingScope, this.packageName);
        }
    }

    getModelAnnotations(){
        var modelAnnotations = {};
        for (var i = 0; i < this.annotations.length; i++){
            let annotationContext = this.annotations[i];
            if (annotationContext.annotation_type().model_type()!=null){
                let annotationName = annotationContext.annotation_type().model_type().getText();
                if (!annotationName.contains(".") && (packageName!=null)){
                    annotationName = packageName + "." + annotationName;
                }
                var params = {};
                if (annotationContext.annotation_parameters()!=null){
                    for (var j = 0; j < annotationContext.annotation_parameters().annotation_parameter().length; j++){
                        let param = annotationContext.annotation_parameters().annotation_parameter()[j];
                        params[param.ID().getText()] = param.annotation_parameter_value().STRING().getText().replaceAll("\"", "");
                    }
                }
                modelAnnotations[annotationName] = params;
            }
        }
        return modelAnnotations;
    }

    getAnnotations(){
        var annotationObjects = [];
        for (var i = 0; i < this.annotations.length; i++){
            let annotationContext = this.annotations[i];
            if (annotationContext.annotation_type().reference()!=null){
                let annotationName = annotationContext.annotation_type().reference().getText();
                var annotationParameters = {};

                if (annotationContext.annotation_parameters()!=null){
                    for (var j = 0; j < annotationContext.annotation_parameters().annotation_parameter().length; j++){
                        let param = annotationContext.annotation_parameters().annotation_parameter()[j];
                        annotationParameters[param.ID().getText()] = param.annotation_parameter_value().STRING().getText().replaceAll("\"", "");
                    }
                }

                let annotation = new Annotation(annotationName, annotationParameters);
                annotationObjects.push(annotation);
            }
        }
        return annotationObjects;
    }
}
