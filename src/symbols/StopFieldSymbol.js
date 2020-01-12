const Scope = require("./Scope");
const StopParser = require("../parser/StopParser");

var StopFieldSymbol = function(ctx, name, typeName, scalar, defaultPackageName){
	this.name = name;
    this.typeName = typeName;
    this.packageName = defaultPackageName;
    this.scalar = scalar;
    this.optional = false;
    this.collection = false;
    this.dynamicSource = null;

    if (!this.isReference(name) && !scalar){
        if (ctx.parentCtx != null){
            var p = ctx.parentCtx.getChild(0);
            if (p!=null && (p instanceof StopParser.StopParser.PackageDeclarationContext)){
                this.packageName = p.packageName().getText();
            }
        }

        if (this.packageName!=null){
            this.typeName = this.packageReference(this.packageName, this.typeName);
        }
    }
};
StopFieldSymbol.prototype = Object.create(Scope.prototype);
StopFieldSymbol.prototype.constructor = StopFieldSymbol;

module.exports = StopFieldSymbol;