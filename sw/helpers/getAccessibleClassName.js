import { splitScopeAndClass } from '../constant/splitScopedAndClass';
export function getAccessibleClassName(scope, hashedClasses) {
    const accessibleClassName = {};
    for (const hashedClassName in hashedClasses) {
        const hashedClass = hashedClasses[hashedClassName];
        const keyAccess = hashedClassName.replace(`${scope}${splitScopeAndClass}`, '');
        const keyCamelCase = convertToCamelCase(keyAccess);
        accessibleClassName[keyCamelCase] = hashedClass.mergedClass;
    }
    return accessibleClassName;
}
function convertToCamelCase(str) {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}
//# sourceMappingURL=getAccessibleClassName.js.map