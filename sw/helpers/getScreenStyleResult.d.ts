import { HashedClass } from '../types/theme.types';
export declare function getScreenStyleResult(screenStyleResult: HashedClass | undefined, hashedClasses: HashedClass | undefined): {
    screenCssText: string[] | undefined;
    screenAccessibleClass: HashedClass | undefined;
} | undefined;
