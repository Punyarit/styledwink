export function contentParseString(inputStr) {
    return inputStr
        .replace(/([^\\])_/g, '$1 ')
        .replace(/\\_/g, '_')
        .slice(2, -2);
}
//# sourceMappingURL=contentParseString.js.map