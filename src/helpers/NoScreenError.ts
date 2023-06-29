export const NoScreenError = (s: string) => {
  throw new SyntaxError(`SW-THEME does not have the screen "${s}"`);
};
