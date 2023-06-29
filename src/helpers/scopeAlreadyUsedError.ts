export const scopeAlreadyUsedError = (scope: string) => {
  throw Error(`Scope: "${scope}" has already been used. Please change scope name.`);
};
