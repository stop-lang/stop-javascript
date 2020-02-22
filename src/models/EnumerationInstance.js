var EnumerationInstance = function(enumeration, value){
    this.enumeration = enumeration;
    this.value = value;
};
EnumerationInstance.prototype.constructor = EnumerationInstance;

module.exports = EnumerationInstance;