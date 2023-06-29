import { ClassInfo, HashedClass } from '../types/theme.types';

export function getScreenStyleResult(
  screenStyleResult: HashedClass | undefined,
  hashedClasses: HashedClass | undefined
) {
  if (!screenStyleResult || !hashedClasses) return;
  let screenCssText: string[] | undefined;
  let screenAccessibleClass: HashedClass | undefined;
  if (screenStyleResult) {
    screenCssText = [];
    const screenResult = screenStyleResult;

    for (const screenResultClassName in screenResult) {
      const screenVal = screenResult[screenResultClassName];
      const initialHashedClass = hashedClasses[screenVal.classRef!];
      let cssRule: string | undefined;

      if (initialHashedClass) {
        cssRule = getScreenStyleText(screenVal, initialHashedClass);
      } else {
        cssRule = getScreenStyleText(screenVal, screenVal);
        screenAccessibleClass ||= {};
        screenAccessibleClass[screenVal.classRef!] = screenVal;
      }
      screenCssText.push(cssRule!);
    }
  }

  return { screenCssText, screenAccessibleClass };
}

function getScreenStyleText(screenVal: ClassInfo, hashedClass: ClassInfo) {
  return screenVal.cssText?.replace(screenVal.classRef!, hashedClass?.mergedClass);
}
