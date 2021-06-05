export default class State {
    static Type = {
        SYNC: 0,
        START: 1,
        STOP: 2,
        QUEUE: 3
    };

    constructor(name, stateType){
        this.name = name;
        this.type = stateType;
        this.transitions = {};
        this.errors = {};
        this.properties = {};
        this.enqueues = {};
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
}
