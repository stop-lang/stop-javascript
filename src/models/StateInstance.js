const StopValidationException = require("../validation/StopValidationException");
const EnumerationInstance = require("./EnumerationInstance");
const Property = require("./Property");

var StateInstance = function(state, properties){
    this.state = state;
    if (!properties){
    	this.properties = [];
    }else{
    	this.properties = properties;
	}
};
StateInstance.prototype.constructor = StateInstance;

StateInstance.prototype.validateProperties = function(validateDynamicProperties){
	if (validateDynamicProperties == undefined){
		validateDynamicProperties = true;
	}

	var stateProperties = this.state.properties;
    for (var key in stateProperties){
    	var property = stateProperties[key];
        if (this.properties[key] == null || this.properties[key] == undefined){
            if (!validateDynamicProperties && (property.providerState!=null)){
                continue;
            }
            if (property.optional){
                continue;
            }else {
                throw new StopValidationException("Property not found: " + key);
            }
        }
        var propertyName = key;
        if (property == null){
            throw new StopValidationException("Property undefined");
        }
        var value = this.properties[propertyName];
        if (value != null){
            if (property.collection){
                if (!(value instanceof Array)){
                    throw new StopValidationException("Collection must be defined");
                }else {
                    var valueList = value;
                    for (var i in valueList){
                    	var element = valueList[i];
                    	if (!validateValue(property, element)){
                            throw new StopValidationException("Invalid type "+element.type+" was expecting " +property.type+ " for collection element within " + key);
                        }
                        if ( property.isStateProperty() ){
                            if (!(element instanceof StateInstance)){
                                throw new StopValidationException("State property requires state instance");
                            }

                            var stateInstance = element;
                            var stateProperty = property;

                            if ( stateProperty.state.name != stateInstance.state.name ){
                                throw new StopValidationException("State instance " + stateInstance.state.name + " doesn't match property " + stateProperty.state.name);
                            }

                            stateInstance.validateProperties();
                        }
                        if ( property.isEnumerationProperty() ){
                            if (!(element instanceof EnumerationInstance)){
                                throw new StopValidationException("Enumeration property requires enumeration instance");
                            }

                            var enumerationInstance = element;
                            var enumerationProperty = property;
                        if ( enumerationProperty.state.name != enumerationInstance.enumeration.name ){
                            if ( !enumerationInstance.enumeration.name.endsWith("."+enumerationProperty.state.name) ){
                                    throw new StopValidationException("Enumeration instance doesn't match property");
                                }
                            }
                        }
                    }
                }
            }else {
            	if (!validateValue(property, value)){
                    if ( !((value instanceof EnumerationInstance) && (property.type == Property.PropertyType.STRING)) ){
                        throw new StopValidationException("Invalid value for " + key);
                    }
                }

                if ( property.isStateProperty() ){
                    if (!(value instanceof StateInstance)){
                        throw new StopValidationException("State property requires state instance");
                    }

                    var stateInstance = value;
                    var stateProperty = property;

                    if ( stateProperty.state.name != stateInstance.state.name ){
                        throw new StopValidationException("State instance " + stateInstance.state.name + " doesn't match property " + stateProperty.state.name);
                    }

                    stateInstance.validateProperties();
                }
                if ( property.isEnumerationProperty() ){
                    if (!(value instanceof EnumerationInstance)){
                        throw new StopValidationException("Enumeration property requires enumeration instance");
                    }

                    var enumerationInstance = value;
                    var enumerationProperty = property;

                    if ( enumerationProperty.state.name != enumerationInstance.enumeration.name ){
                        if ( !enumerationInstance.enumeration.name.endsWith("."+enumerationProperty.state.name) ){
                            throw new StopValidationException("Enumeration instance doesn't match property");
                        }
                    }
                }
            }
        }else{
            throw new StopValidationException("Invalid null value for " + key);
        }
    }

	return true;
};

function validateValue(property, value) {
    if (value == undefined){
        return false;
    }
    if (value == null){
        return false;
    }

    switch(property.type){
    	case Property.PropertyType.STRING:
    		return isString(value);
    	case Property.PropertyType.BOOL:
    		return isBoolean(value);
        case Property.PropertyType.STATE:
            return (value instanceof StateInstance);
        case Property.PropertyType.ENUM:
            return (value instanceof EnumerationInstance);
        case Property.PropertyType.DOUBLE:
        case Property.PropertyType.FLOAT:
            return isFloat(value);
        case Property.PropertyType.INT32:
        case Property.PropertyType.INT64:
        case Property.PropertyType.SINT32:
        case Property.PropertyType.SINT64:
        case Property.PropertyType.UINT32:
        case Property.PropertyType.UINT64:
        case Property.PropertyType.FIXED32:
        case Property.PropertyType.FIXED64:
        case Property.PropertyType.SFIXED32:
        case Property.PropertyType.SFIXED64:
            return isInt(value);
        case Property.PropertyType.BYTES:
            return (value instanceof Buffer);
        case Property.PropertyType.TIMESTAMP:
            return (value instanceof Date);
    }

    return false;
};

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function isString (value) {
	return typeof value === 'string' || value instanceof String;
}

function isBoolean (value) {
	return typeof value === 'boolean';
}

module.exports = StateInstance;