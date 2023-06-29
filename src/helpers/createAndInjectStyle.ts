export function createAndInjectStyle(cssText: string) {
  const style = new CSSStyleSheet();
  style.replaceSync(cssText);
  document.adoptedStyleSheets.push(style);
}
