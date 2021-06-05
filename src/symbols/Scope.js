import StopParser from "../parser/StopParser.js";

const REFERENCE_DELIMETER = ".";

export default class Scope {
    constructor(scope){
        this.enclosingScope = scope;
        this.definitions = {};
    }

    define(symbol){
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
    }

    getNestedScopes(symbol){
        var nestedScopes = [];
    
        for (var name in this.definitions){
            var value = this.definitions[name];
            if (value instanceof Scope){
                nestedScopes.push(value);
            }
        }
    
        return nestedScopes;
    }

    getEnclosingScopeWithLine(scope){
        if (scope.line){
            return scope;
        }
        if (scope.enclosingScope){
            return this.getEnclosingScopeWithLine(scope.enclosingScope);
        }
        return undefined;
    }

    isReference(name){
        return name.indexOf(REFERENCE_DELIMETER) > 0;
    }

    packageReference(packageName, name){
        return packageName + REFERENCE_DELIMETER + name;
    }

    modelReference(modelSymbol, name){
        return modelSymbol.name + REFERENCE_DELIMETER + name;
    }

    setNameWithPackage(ctx, name, packageName){
        if (!this.isReference(name)){
            if (ctx.parentCtx != null){
                var p = ctx.parentCtx.getChild(0);
                if (p!=null && (p instanceof StopParser.PackageDeclarationContext)){
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

    getParentModelContext(ctx){
        if (ctx.parentCtx){
            if (ctx.parentCtx instanceof StopParser.ModelContext){
                return ctx.parentCtx;
            }
            return this.getParentModelContext(ctx.parentCtx);
        }
        return null;
    }
}
