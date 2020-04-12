var State = function(name, stateType){
    this.name = name;
    this.type = stateType;
    this.transitions = {};
    this.errors = {};
    this.properties = {};
    this.enqueues = {};
    this.returnType = null;
    this.returnState = null;
    this.returnCollection = false;

    this.start = stateType == StateType.START;
    this.stop = stateType == StateType.STOP;
    this.queue = stateType == StateType.QUEUE;
    return this;
};

State.prototype.getOrderedProperties = function() {
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
};

const StateType = require("./StateType");

module.exports = State;