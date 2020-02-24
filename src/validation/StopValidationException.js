var StopValidationException = function(message){
    this.message = message;
};
StopValidationException.prototype.constructor = StopValidationException;

module.exports = StopValidationException;