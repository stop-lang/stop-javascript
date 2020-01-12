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
        if (ctx.collection().type() != null) {
            if (ctx.collection().type().model_type()!=null) {
                name = ctx.collection().type().getText();
                if (!this.isReference(name)) {
                    if (this.packageName != null) {
                        name = this.packageReference(packageName, name);
                    }
                }
            }else{
                scalar = true;
                name = ctx.collection().type().scalar_type().getText();
            }
        }
    }else if(ctx.type() != null){
        if (ctx.type().model_type()!=null) {
            name = ctx.type().getText();
            if (!this.isReference(name)) {
                if (this.packageName != null) {
                    name = this.packageReference(packageName, name);
                }
            }
        }else{
            scalar = true;
            name = ctx.type().scalar_type().getText();
        }
    }

    this.name = name;
};
ReturnSymbol.prototype = Object.create(Scope.prototype);
ReturnSymbol.prototype.constructor = ReturnSymbol;

module.exports = ReturnSymbol;