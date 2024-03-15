import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface PaletteType {
    // Red
    red10: string;
    red20: string;
    red30: string;
    red40: string;
    red50: string;
    red60: string;
    red70: string;
    red80: string;
    red90: string;
    red100: string;
    // Blue
    blue10: string;
    blue20: string;
    blue30: string;
    blue40: string;
    blue50: string;
    blue60: string;
    blue70: string;
    blue80: string;
    blue90: string;
    blue100: string;
    // Amber
    amber10: string;
    amber20: string;
    amber30: string;
    amber40: string;
    amber50: string;
    amber60: string;
    amber70: string;
    amber80: string;
    amber90: string;
    amber100: string;
    // Gray
    gray10: string;
    gray20: string;
    gray30: string;
    gray40: string;
    gray50: string;
    gray60: string;
    gray70: string;
    gray80: string;
    gray90: string;
    gray100: string;
    // tarnsparent
    transparent: 'transparent';
  }
  export interface InterationType {
    base: {
      focus: string;
      select: string;
      disabled: string;
      checked: string;
    };
    opacity: {
      // white
      white30: string;
      white50: string;
      white70: string;
      // black
      black30: string;
      black50: string;
      black70: string;
    };
  }
  export interface ElementType {
    // Primary
    primary50: string;
    primary100: string;
    primary200: string;
    primary300: string;
    primary400: string;
    primary500: string;
    primary600: string;
    primary700: string;
    primary800: string;
    primary900: string;
    // GrayScale
    grayScale50: string;
    grayScale100: string;
    grayScale200: string;
    grayScale300: string;
    grayScale400: string;
    grayScale500: string;
    grayScale600: string;
    grayScale700: string;
    grayScale800: string;
    grayScale900: string;
    // Alert
    warm100: string;
    warm500: string;
    suc100: string;
    suc500: string;
  }
  export interface FontsProps {
    size: {
      size40: string;
      size35: string;
      size26: string;
      size18: string;
      size16: string;
      size14: string;
      size12: string;
    };
    weight: {
      weight100: string;
      weight200: string;
      weight300: string;
      weight400: string;
      weight500: string;
      weight600: string;
      weight700: string;
      weight800: string;
      weight900: string;
    };
    style: {
      heading1: string;
      heading2: string;
      title1: string;
      title2: string;
      title3: string;
      subtitle1: string;
      subtitle2: string;
      subtitle3: string;
      body1: string;
      body2: string;
      body3: string;
      body4: string;
      body5: string;
      body6: string;
      detail1: string;
      detail2: string;
    };
  }
  export interface Theme {
    palette: PaletteType;
    interaction: InterationType;
    element: ElementType;
    font: FontsProps;
  }
}
