import PropertyValidation from "./PropertyValidation.js";

export default class StatePropertyValidation extends PropertyValidation {
    constructor(state,inheritable){
        super(state.name, {});
        this.state = state;
        this.inheritable = inheritable;
    }
}