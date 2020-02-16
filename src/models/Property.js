var Property = function(name, type, collection, optional){
    this.name = name;
    this.type = type;
    this.collection = collection;
    this.optional = optional;
    this.providerState = null;
    this.providerStateMapping = null;
};
Property.prototype.constructor = Property;

module.exports = Property;