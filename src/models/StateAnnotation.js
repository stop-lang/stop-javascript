import Annotation from "./Annotation.js";

export default class StateAnnotation extends Annotation {
    constructor(state, parameters){
        super(state.name, parameters);
        this.state = state;
    }
}