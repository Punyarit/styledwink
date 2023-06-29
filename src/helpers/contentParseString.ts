export function contentParseString(inputStr: string): string | null {
  return inputStr
    .replace(/([^\\])_/g, '$1 ')
    .replace(/\\_/g, '_')
    .slice(2, -2);
}
