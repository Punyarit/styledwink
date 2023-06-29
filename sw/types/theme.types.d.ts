export type ThemeVariable = {
    [key: string]: string;
};
export type HashedClass = {
    [className: string]: ClassInfo;
};
export type ClassInfo = {
    hashedClass: string;
    mergedClass: string;
    cssText?: string;
    classRef?: string;
};
export type ParsedStye = {
    styleResult: string[];
    hashedClasses: HashedClass;
    cssVariablesResult: string[];
    screenStyleResult: HashedClass;
    scope: string;
};
export type StyleProperty<T extends string> = {
    [K in T]: string;
};
