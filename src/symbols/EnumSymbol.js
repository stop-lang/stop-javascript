const Scope = require("./Scope");
const StopParser = require("../parser/StopParser");

var EnumSymbol = function(ctx, enclosingScope, defaultPackageName){
    this.enclosingScope = enclosingScope;
    this.values = [];
    this.definitions = {};
    this.canonical = false;
    this.name = ctx.MODEL_TYPE().getText();

    if (ctx.parentCtx.parentCtx instanceof StopParser.StopParser.FileContext) {
        canonical = true;
        var p = ctx.parentCtx.parentCtx.getChild(0);
        if (p != null && (p instanceof StopParser.StopParser.PackageDeclarationContext)) {
            var packageName = p.packageName().getText();
            this.name = this.packageReference(this.packageName, this.name);
        } else if (defaultPackageName!=null){
            this.name = this.packageReference(defaultPackageName, this.name);
        }
    }else{
        this.name = this.modelReference(enclosingScope, this.name);
    }
};
EnumSymbol.prototype = Object.create(Scope.prototype);
EnumSymbol.prototype.constructor = EnumSymbol;

module.exports = EnumSymbol;