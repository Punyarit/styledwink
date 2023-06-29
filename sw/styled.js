import { getAccessibleClassName } from './helpers/getAccessibleClassName';
import { getCssVariableResult } from './helpers/getCssVariableResult';
import { getScreenStyleResult } from './helpers/getScreenStyleResult';
import { parseStyle } from './helpers/parseStyle';
import { createAndInjectStyle } from './helpers/createAndInjectStyle';
export const styled = (styleAbbr) => {
    const { hashedClasses, styleResult, screenStyleResult, cssVariablesResult, scope } = parseStyle(styleAbbr);
    const variableResult = getCssVariableResult(cssVariablesResult);
    const { screenAccessibleClass, screenCssText } = getScreenStyleResult(screenStyleResult, hashedClasses);
    const cssTextResult = [...styleResult, ...screenCssText, variableResult].join('');
    createAndInjectStyle(cssTextResult);
    const accessibleClassName = getAccessibleClassName(scope, {
        ...hashedClasses,
        ...screenAccessibleClass,
    });
    return accessibleClassName;
};
//# sourceMappingURL=styled.js.map