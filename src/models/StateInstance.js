import StopValidationException from "../validation/StopValidationException.js";
import EnumerationInstance from "./EnumerationInstance.js";
import Property from "./Property.js";

export default class StateInstance {
    constructor(state, properties){
        this.state = state;
        if (!properties){
            this.properties = [];
        }else{
            this.properties = properties;
        }
    }

    isInt(n){
        return Number(n) === n && n % 1 === 0;
    }

    isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }

    isString (value) {
        return typeof value === 'string' || value instanceof String;
    }

    isBoolean (value) {
        return typeof value === 'boolean';
    }

    validateValue(property, value) {
        if (value == undefined){
            return false;
        }
        if (value == null){
            return false;
        }

        switch(property.type){
            case Property.Type.STRING:
                return this.isString(value);
            case Property.Type.BOOL:
                return this.isBoolean(value);
            case Property.Type.STATE:
                return (value instanceof StateInstance);
            case Property.Type.ENUM:
                return (value instanceof EnumerationInstance);
            case Property.Type.DOUBLE:
            case Property.Type.FLOAT:
                return this.isFloat(value);
            case Property.Type.INT32:
            case Property.Type.INT64:
            case Property.Type.SINT32:
            case Property.Type.SINT64:
            case Property.Type.UINT32:
            case Property.Type.UINT64:
            case Property.Type.FIXED32:
            case Property.Type.FIXED64:
            case Property.Type.SFIXED32:
            case Property.Type.SFIXED64:
                return this.isInt(value);
            case Property.Type.BYTES:
                return (value instanceof Buffer);
            case Property.Type.TIMESTAMP:
                return (value instanceof Date);
        }

        return false;
    }

    validateProperties(validateDynamicProperties){
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
                            if (!this.validateValue(property, element)){
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
                    if (!this.validateValue(property, value)){
                        if ( !((value instanceof EnumerationInstance) && (property.type == Property.Type.STRING)) ){
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
    }
}
