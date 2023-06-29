export function generateColorStyleText(themeObj) {
    let cssOutput = '';
    for (const [theme, value] of Object.entries(themeObj)) {
        cssOutput += `sw-theme.${theme} { ${value} } `;
    }
    return cssOutput;
}
//# sourceMappingURL=generateColorStyleText.js.map