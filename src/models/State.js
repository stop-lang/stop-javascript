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
};
State.prototype.constructor = State;

module.exports = State;