export function createAndInjectStyle(cssText) {
    const style = new CSSStyleSheet();
    style.replaceSync(cssText);
    document.adoptedStyleSheets.push(style);
}
//# sourceMappingURL=createAndInjectStyle.js.map