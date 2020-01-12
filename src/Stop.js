const antlr4 = require("antlr4");
const StopLexer = require("./parser/StopLexer");
const StopParser = require("./parser/StopParser");

const DefPhase = require("./validation/DefPhase");
const RefPhase = require("./validation/RefPhase");
const StopPhase = require("./validation/StopPhase");

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
    
    var defPhase = new DefPhase(listener);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(defPhase, tree);
    handleErrors(listener, defPhase.errors);

    var refPhase = new RefPhase(listener, defPhase.globals, defPhase.scopes);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(refPhase, tree);
    handleErrors(listener, refPhase.errors);

    var stopPhase = new StopPhase(listener, defPhase.globals, defPhase.scopes);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(stopPhase, tree);
    handleErrors(listener, stopPhase.errors);

    if (annotations.length > 0){
        throw Error("invalid file");
    }
}

function handleErrors(listener, errors){
    for (var errorIndex in errors){
        var error = errors[errorIndex];
        listener.annotations.push({
            row: error.line - 1,
            column: 0,
            text: error.message,
            type: "error"
        });
    }
}

module.exports = Stop;