export function getCssVariableResult(cssVariablesResult: string[]) {
  return cssVariablesResult.length ? `cx-theme{${cssVariablesResult.join('')}}` : ``;
}
