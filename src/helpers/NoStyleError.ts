export const NoStyleError = (s: string) => {
  throw new SyntaxError(`SW-BOX does not have the style "${s}"`);
};
