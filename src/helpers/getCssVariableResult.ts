export function getCssVariableResult(cssVariablesResult: string[]) {
  return cssVariablesResult.length ? `sw-theme{${cssVariablesResult.join('')}}` : ``;
}
