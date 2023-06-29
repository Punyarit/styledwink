export const NoScreenError = (s: string) => {
  throw new SyntaxError(`CX-THEME does not have the screen "${s}"`);
};
