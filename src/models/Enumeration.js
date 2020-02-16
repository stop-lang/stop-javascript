var Enumeration = function(name, values){
    this.name = name;
    this.values = values;
};
Enumeration.prototype.constructor = Enumeration;

module.exports = Enumeration;