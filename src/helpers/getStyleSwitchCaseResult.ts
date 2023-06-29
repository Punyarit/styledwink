import { Theme } from '../theme';
import { contentParseString } from './contentParseString';
import { NoStyleError } from './NoStyleError';
const minMax = (attr1: string, attr2: string, attr3: string | undefined, s: string) =>
  `${attr1}-${attr2 === 'w' ? 'width' : attr2 === 'h' ? 'height' : NoStyleError(s)}:${attr3}`;

const borderFunc = (
  s: string,
  attr2: string,
  attr3: string | undefined,
  attr4: string | undefined
) => {
  if (['left', 'right', 'top', 'bottom'].includes(attr2)) {
    const [, , , , ...borderSideColor] = s.split('-');
    return `border-${attr2}: ${attr3} ${attr4} var(--${borderSideColor.join('-')})`;
  }
  const [, , , ...borderColor] = s.split('-');
  return `border: ${attr2} ${attr3} var(--${borderColor.join('-')})`;
};

const gridGap = (attr1: string, attr2: string, attr3: string | undefined, s: string) => {
  if (attr2 === 'gap') {
    return `${attr1 === 'col' ? 'column' : 'row'}-gap:${attr3}`;
  } else {
    NoStyleError(s);
  }
};

const fontValue = (s: string) => {
  const fontVal = Theme.font?.[s.replace(/font-/g, '')];
  if (!fontVal) NoStyleError(s);
  return `font-family:${fontVal}`;
};

const fontSizeFunc = (attr2: string) => {
  if (+Theme.fsDisplay > 1) {
    const size = parseFloat(attr2);
    const fontSize = Math.round(size * +Theme.fsDisplay);
    const unit = attr2.replace(`${size}`, '');
    return `font-size:${fontSize}${unit}`;
  }
  return `font-size:${attr2}`;
};

const getOutlineStyle = (attr2: string, attr3: string | undefined, s: string) => {
  if (attr2 === 'offset') {
    return `outline-offset:${attr3}`;
  }
  const [, , , ...outlineColor] = s.split('-');
  return `outline: ${attr2} ${attr3} var(--${outlineColor.join('-')})`;
};

export const getStyleSwitchCaseResult = (
  s: string,
  attr1: string,
  attr2: string,
  attr3?: string,
  attr4?: string
) => {
  switch (attr1) {
    case 'w':
      return `width:${attr2}`;
    case 'min':
    case 'max':
      return minMax(attr1, attr2, attr3, s);
    case 'h':
      return `height:${attr2}`;
    case 'bg':
      return `background-color:var(--${s.slice(3)})`;
    case 'c':
      return `color:var(--${s.slice(2)})`;
    case 'fs':
      return fontSizeFunc(attr2);
    case 'fw':
      return `font-weight:${attr2}`;
    case 'round':
      return `border-radius:${attr2}`;
    case 'left':
    case 'top':
    case 'right':
    case 'bottom':
      return `${attr1}:${attr2}`;
    case 'm':
      return `margin:${attr2}`;
    case 'ml':
      return `margin-left:${attr2}`;
    case 'mt':
      return `margin-top:${attr2}`;
    case 'mr':
      return `margin-right:${attr2}`;
    case 'mb':
      return `margin-bottom:${attr2}`;
    case 'mx':
      return `margin-left:${attr2};margin-right:${attr2}`;
    case 'my':
      return `margin-top:${attr2};margin-bottom:${attr2}`;
    case 'p':
      return `padding:${attr2}`;
    case 'pl':
      return `padding-left:${attr2}`;
    case 'pt':
      return `padding-top:${attr2}`;
    case 'pr':
      return `padding-right:${attr2}`;
    case 'pb':
      return `padding-bottom:${attr2}`;
    case 'px':
      return `padding-left:${attr2};padding-right:${attr2}`;
    case 'py':
      return `padding-top:${attr2};padding-bottom:${attr2}`;
    case 'border':
      return borderFunc(s, attr2, attr3, attr4);
    case 'col':
    case 'row':
      return gridGap(attr1, attr2, attr3, s);
    case 'font':
      return fontValue(s);
    case 'content':
      return `content:'${contentParseString(attr2)}'`;
    case 'shadow':
      return `box-shadow:${s.replace(/shadow|-/g, ' ').trim()}`;
    case 'animation':
      return `animation:${s.replace(/animation|-|\$/g, ' ').trim()}`;
    case 'basis':
      return `flex-basis:${attr2}`;
    case 'line':
      return attr2 === 'height' ? `line-height:${attr3}` : NoStyleError(s);
    case 'letter':
      return attr2 === 'spacing' ? `letter-spacing:${attr2}` : NoStyleError(s);
    case 'indent':
      return `text-indent:${attr2}`;
    case 'outline':
      return getOutlineStyle(attr2, attr3, s);
    case 'z':
      return `z-index:${attr2}`;
    case 'order':
      return `order:${attr2}`;
    case 'columns':
      return `columns:${attr2}`;
    case 'grow':
      return `flex-grow:${attr2}`;
    case 'shrink':
      return `flex-shrink:${attr2}`;
    case 'opacity':
      return `opacity:${attr2}`;
    case 'blur':
    case 'brightness':
    case 'contrast':
    case 'grayscale':
    case 'invert':
    case 'saturate':
    case 'sepia':
      return `filter:${attr1}(${attr2})`;
    case 'hue':
      return `filter: hue-rotate(${attr2})`;
    case 'backdrop':
      return `backdrop-filter:${attr2 === 'hue' ? `hue-rotate(${attr3})` : `${attr2}(${attr3})`}`;
    case 'transition':
      return `transition:${s.replace(/transition|-/g, ' ')}`;
    case 'scale':
    case 'rotate':
    case 'translateX':
    case 'translateY':
    case 'skewX':
    case 'skewY':
      return `transform:${attr1}(${attr2})`;
    case 'fill':
      return attr2 !== 'opacity' ? `fill:var(--${s.slice(5)})` : `fill-opacity:${attr3}`;
    case 'stroke':
      return attr2 !== 'opacity'
        ? `${attr3 ? `stroke:var(--${s.slice(7)})` : `stroke-width:${attr2}`}`
        : `stroke-opacity:${attr3}`;
    default:
      return NoStyleError(s);
  }
};
