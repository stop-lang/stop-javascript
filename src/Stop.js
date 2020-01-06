const antlr4 = require("antlr4");
const StopLexer = require("./parser/StopLexer");
const StopParser = require("./parser/StopParser");

var AnnotatingErrorListener = function(annotations) {
    antlr4.error.ErrorListener.call(this);
    this.annotations = annotations;
    return this;
};

AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;
AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error"
 });
};

function Stop(input){
	var stream = antlr4.CharStreams.fromString(input);
    var lexer = new StopLexer.StopLexer(stream);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new StopParser.StopParser(tokens);
    var annotations = [];
    var listener = new AnnotatingErrorListener(annotations);
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    var tree = parser.file();
    if (annotations.length > 0){
    	throw Error("invalid file");
    }
}

module.exports = Stop;