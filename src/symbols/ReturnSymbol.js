const Scope = require("./Scope");

var ReturnSymbol = function(ctx, enclosingScope, defaultPackageName){
    this.line = ctx.start.line;
    this.enclosingScope = enclosingScope;
    this.definitions = {};

    this.scalar = false;
    this.packageName = defaultPackageName;
    this.collection = ctx.collection() != null;

    var name = null;
    
    if (ctx.collection() != null) {
        this.scalar = ctx.collection().type().getText() == ctx.collection().type().getText().toLowerCase();
        name = ctx.collection().type().getText();
        if (!this.scalar){
            if (!this.isReference(name)) {
                if (this.packageName != null) {
                    name = this.packageReference(packageName, name);
                }
            }
        }
    }else if(ctx.type() != null){
        this.scalar = ctx.type().getText() == ctx.type().getText().toLowerCase();
        name = ctx.type().getText();
        if (!this.scalar){
            if (!this.isReference(name)) {
                if (this.packageName != null) {
                    name = this.packageReference(packageName, name);
                }
            }
        }
    }

    this.name = name;
};
ReturnSymbol.prototype = Object.create(Scope.prototype);
ReturnSymbol.prototype.constructor = ReturnSymbol;

module.exports = ReturnSymbol;