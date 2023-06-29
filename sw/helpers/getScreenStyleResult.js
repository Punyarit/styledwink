export function getScreenStyleResult(screenStyleResult, hashedClasses) {
    if (!screenStyleResult || !hashedClasses)
        return;
    let screenCssText;
    let screenAccessibleClass;
    if (screenStyleResult) {
        screenCssText = [];
        const screenResult = screenStyleResult;
        for (const screenResultClassName in screenResult) {
            const screenVal = screenResult[screenResultClassName];
            const initialHashedClass = hashedClasses[screenVal.classRef];
            let cssRule;
            if (initialHashedClass) {
                cssRule = getScreenStyleText(screenVal, initialHashedClass);
            }
            else {
                cssRule = getScreenStyleText(screenVal, screenVal);
                screenAccessibleClass ||= {};
                screenAccessibleClass[screenVal.classRef] = screenVal;
            }
            screenCssText.push(cssRule);
        }
    }
    return { screenCssText, screenAccessibleClass };
}
function getScreenStyleText(screenVal, hashedClass) {
    return screenVal.cssText?.replace(screenVal.classRef, hashedClass?.mergedClass);
}
//# sourceMappingURL=getScreenStyleResult.js.map