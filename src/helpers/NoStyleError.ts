export const NoStyleError = (s: string) => {
  throw new SyntaxError(`CX-BOX does not have the style "${s}"`);
};
