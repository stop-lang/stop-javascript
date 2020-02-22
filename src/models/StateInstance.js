var StateInstance = function(state, properties){
    this.state = state;
    if (!properties){
    	this.properties = [];
    }else{
    	this.properties = properties;
	}
};
StateInstance.prototype.constructor = StateInstance;

StateInstance.prototype.validateProperties = function(dynamic){
	if (dynamic == undefined){
		dynamic = true;
	}
	return true;
};

module.exports = StateInstance;