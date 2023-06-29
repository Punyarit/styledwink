import { createAndInjectStyle } from './helpers/createAndInjectStyle';
import { generateColorStyleText } from './helpers/generateColorStyleText';
export class Theme extends HTMLElement {
    constructor() {
        super();
        const colorStyleText = generateColorStyleText(Theme.color);
        const variableStyleText = `sw-theme{${Theme.variable}}`;
        const themeSTyle = colorStyleText + variableStyleText;
        createAndInjectStyle(themeSTyle);
    }
}
Theme.color = {};
Theme.fsDisplay = '1';
Theme.variable = ``;
customElements.define('sw-theme', Theme);
//# sourceMappingURL=theme.js.map