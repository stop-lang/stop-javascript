import StopValidationException from "../validation/StopValidationException.js";
import StateAnnotation from "./StateAnnotation.js";

export default class State {
    static Type = {
        SYNC: 0,
        START: 1,
        STOP: 2,
        QUEUE: 3
    };

    constructor(name, stateType){
        if (!stateType){
            stateType = State.Type.SYNC;
        }
        this.name = name;
        this.type = stateType;
        this.transitions = {};
        this.errors = {};
        this.properties = {};
        this.enqueues = {};
        this.annotations = [];
        this.returnType = null;
        this.returnState = null;
        this.returnCollection = false;

        this.start = stateType == State.Type.START;
        this.stop = stateType == State.Type.STOP;
        this.queue = stateType == State.Type.QUEUE;
    }

    getOrderedProperties() {
        var ordered = [];
        for (var i in this.properties){
            let property = this.properties[i];
            if (!property.providerState){
                ordered.push(property);
            }
        }
        for (var i in this.properties){
            let property = this.properties[i];
            if (property.providerState){
                ordered.push(property);
            }
        }
        return ordered;
    }

    addAnnotation(annotation) {
        if (annotation instanceof StateAnnotation) {
            for (var propertyName in annotation.properties){
                let p = annotation.state.properties[propertyName];
                if (p) {
                    let thisProperty = this.properties.get(propertyName);
                    if (thisProperty) {
                        if (!thisProperty.canInherit(p)) {
                            throw new StopValidationException("Inherited property " + p.name + " is not identical to property within " + this.name);
                        }
                    } else {
                        throw new StopValidationException("Inherited property " + p.name + " not found within " + this.name);
                    }
                }
            }
        }
        this.annotations.push(annotation);
    }

    getInheritedStates(){
        var states = [];
        for (var i = 0; i < this.annotations.length; i++){
            let annotation = this.annotations[i];
            if (annotation instanceof  StateAnnotation){
                states.push(annotation.state);
            }
        }

        return states;
    }

    equals(otherState){
        if (otherState instanceof State){
            return (this.name == otherState.name) && (this.type == otherState.type);
        }
        return false;
    }

    hasInheritedState(state){
        let inheritedStates = this.getInheritedStates();
        for (var i = 0; i < inheritedStates.length; i++){
            let inheritedState = inheritedStates[i];
            if (inheritedState.equals(state)){
                return true;
            }
        }
        return false;
    }
}
