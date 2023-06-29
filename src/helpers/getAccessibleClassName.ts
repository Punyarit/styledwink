import { splitScopeAndClass } from '../constant/splitScopedAndClass';
import { HashedClass } from '../types/theme.types';

export function getAccessibleClassName(scope: string, hashedClasses: HashedClass) {
  const accessibleClassName: { [className: string]: string } = {};
  for (const hashedClassName in hashedClasses) {
    const hashedClass = hashedClasses[hashedClassName];
    const keyAccess = hashedClassName.replace(`${scope}${splitScopeAndClass}`, '');
    const keyCamelCase = convertToCamelCase(keyAccess);
    accessibleClassName[keyCamelCase] = hashedClass.mergedClass;
  }
  return accessibleClassName;
}

function convertToCamelCase(str: string) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}
