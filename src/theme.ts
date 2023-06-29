import { createAndInjectStyle } from './helpers/createAndInjectStyle';
import { generateColorStyleText } from './helpers/generateColorStyleText';
import { getAccessibleClassName } from './helpers/getAccessibleClassName';
import { getCssVariableResult } from './helpers/getCssVariableResult';
import { getScreenStyleResult } from './helpers/getScreenStyleResult';
import { parseStyle } from './helpers/parseStyle';
import { StyleProperty, ThemeVariable } from './types/theme.types';
// initDefaultStyle();

// Cortex Style
export const styled = <T extends string>(styleAbbr: string): StyleProperty<T> => {
  const { hashedClasses, styleResult, screenStyleResult, cssVariablesResult, scope } =
    parseStyle(styleAbbr);

  const variableResult = getCssVariableResult(cssVariablesResult);

  const { screenAccessibleClass, screenCssText } = getScreenStyleResult(
    screenStyleResult,
    hashedClasses
  )!;
  const cssTextResult = [...styleResult, ...screenCssText!, variableResult].join('');

  createAndInjectStyle(cssTextResult);
  const accessibleClassName = getAccessibleClassName(scope, {
    ...hashedClasses,
    ...screenAccessibleClass,
  });

  return accessibleClassName as StyleProperty<T>;
};

export class Theme extends HTMLElement {
  public static color: ThemeVariable = {};
  public static font?: ThemeVariable;
  public static fsDisplay = '1';
  public static screen?: ThemeVariable;
  public static variable = ``;

  constructor() {
    super();
    const colorStyleText = generateColorStyleText(Theme.color);
    const variableStyleText = `sw-theme{${Theme.variable}}`;
    const themeSTyle = colorStyleText + variableStyleText;
    createAndInjectStyle(themeSTyle);
  }
}
customElements.define('sw-theme', Theme);
