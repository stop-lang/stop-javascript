const StateType = require("./StateType");

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
};
State.prototype.constructor = State;

State.prototype.getOrderedProperties = function() {
	return this.properties;
};

module.exports = State;