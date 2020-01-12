const StopParser = require("../parser/StopParser");

const REFERENCE_DELIMETER = ".";

var Scope = function(scope){
    this.enclosingScope = scope;
    this.definitions = {};
};
Scope.prototype.constructor = Scope;
Scope.prototype.define = function(symbol){
    if (symbol == undefined){
        return;
    }
    if (symbol.name == undefined){
        return;
    }
    var name = symbol.name;
    if (this.definitions[name] != undefined){
        var line = 1;
        var lineScope = this.getEnclosingScopeWithLine(this);
        if(lineScope){
            line = lineScope.line;
        }
        throw {line: line, message: name+ " is already defined"};
    }
    this.definitions[name] = symbol;
};
Scope.prototype.getEnclosingScopeWithLine = function(scope){
    if (scope.line){
        return scope;
    }
    if (scope.enclosingScope){
        return this.getEnclosingScopeWithLine(scope.enclosingScope);
    }
    return undefined;
}
Scope.prototype.isReference = function(name){
    return name.indexOf(REFERENCE_DELIMETER) > 0;
}
Scope.prototype.packageReference = function(packageName, name){
    return packageName + REFERENCE_DELIMETER + name;
}
Scope.prototype.modelReference = function(modelSymbol, name){
    return modelSymbol.name + REFERENCE_DELIMETER + name;
}
Scope.prototype.setNameWithPackage = function(ctx, name, packageName){
    if (!this.isReference(name)){
        if (ctx.parentCtx != null){
            var p = ctx.parentCtx.getChild(0);
            if (p!=null && (p instanceof StopParser.StopParser.PackageDeclarationContext)){
                packageName = p.packageName().getText();
            }
        }

        if (packageName!=null){
            name = this.packageReference(packageName, name);
        }
    }

    this.name = name;
    this.packageName = packageName;
}
Scope.prototype.getParentModelContext = function(ctx){
    if (ctx.parentCtx){
        if (ctx.parentCtx instanceof StopParser.StopParser.ModelContext){
            return ctx.parentCtx;
        }
        return this.getParentModelContext(ctx.parentCtx);
    }
    return null;
}

module.exports = Scope;