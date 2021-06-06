export default class Property {
    static Type = {
        DOUBLE: 0,
        FLOAT: 1,
        INT32: 2,
        INT64: 3,
        UINT32: 4,
        UINT64: 5,
        SINT32: 6,
        SINT64: 7,
        FIXED32: 8,
        FIXED64: 9,
        SFIXED32: 10,
        SFIXED64: 11,
        BOOL: 12,
        STRING: 13,
        BYTES: 14,
        TIMESTAMP: 15,
        STATE: 16,
        ENUM: 17
    };
    
    constructor(name, type, collection, optional, state, annotation, validations){
        this.name = name;
        this.type = type;
        this.collection = collection;
        this.optional = optional;
        this.providerState = null;
        this.providerStateMapping = null;
        this.state = state;
        this.annotation = annotation;
        this.validations = validations;
    }

    isStateProperty() {
        return this.type == Property.Type.STATE;
    }
    
    isEnumerationProperty() {
        return this.type == Property.Type.ENUM;
    }

    canInherit(otherProperty){
        return (otherProperty.name == this.name)
                && (otherProperty.type == this.type)
                && ( !this.optional || (otherProperty.optional == this.optional))
                && (otherProperty.collection == this.collection);
    }
}
