import { StyleProperty, ThemeVariable } from './types/theme.types';
export declare const styled: <T extends string>(styleAbbr: string) => StyleProperty<T>;
export declare class Theme extends HTMLElement {
    static color: ThemeVariable;
    static font?: ThemeVariable;
    static fsDisplay: string;
    static screen?: ThemeVariable;
    static variable: string;
    constructor();
}
