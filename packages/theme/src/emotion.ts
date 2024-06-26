import '@emotion/react';

declare module '@emotion/react' {
  export interface PaletteProps {
    // RED
    red10: '#FFF7F7';
    red20: '#FFE7E7';
    red30: '#FFDFDF';
    red40: '#FFBEBE';
    red50: '#FF9E9E';
    red60: '#FF7D7D';
    red70: '#FF5D5D';
    red80: '#ED1C24';
    red90: '#C00707';
    red100: '#A70006';
    //BLUE
    blue10: '#eaf3ff';
    blue20: '#D9E9FF';
    blue30: '#B9D5FF';
    blue40: '#9CC2F8';
    blue50: '#7FAFF5';
    blue60: '#5394F4';
    blue70: '#3381F2';
    blue80: '#0A68EF';
    blue90: '#0759D9';
    blue100: '#004DBC';
    // YELLOW
    yellow10: '#FFFBEB';
    yellow20: '#FCF5DF';
    yellow30: '#FCF1CA';
    yellow40: '#FDEBA4';
    yellow50: '#FFE47B';
    yellow60: '#FFD755';
    yellow70: '#FFCC2C';
    yellow80: '#FFC200';
    yellow90: '#EFB700';
    yellow100: '#DEAA00';
    // GREEN
    green10: '#EFF8F4';
    green20: '#D6F0E5';
    green30: '#B6E3D0';
    green40: '#7FCBAB';
    green50: '#5CB992';
    green60: '#4AA881';
    green70: '#429A75';
    green80: '#388E6A';
    green90: '#2B7E5B';
    green100: '#1E6C4B';
    // NAVY
    navy10: '#F8F9FB';
    navy20: '#F6F7F9';
    navy30: '#F0F1F4';
    navy40: '#EBEDF1';
    navy50: '#DEE0E8';
    navy60: '#C7CCD8';
    navy70: '#9AA3B9';
    navy80: '#6D7A99';
    navy90: '#40507A';
    navy100: '#003569';
    // AMBER
    amber10: '#FFF';
    amber20: '#FEE7DA';
    amber30: '#FEC7A8';
    amber40: '#FDA675';
    amber50: '#FC8643';
    amber60: '#FC762A';
    amber70: '#F05903';
    amber80: '#BD4603';
    amber90: '#8B3402';
    amber100: '#401801';
    // GRAYCALE
    gray10: '#FFF';
    gray20: '#FCFCFC';
    gray30: '#F7F7F7';
    gray40: '#EFEFEF';
    gray50: '#E6E6E6';
    gray60: '#ABABAB';
    gray70: '#727272';
    gray80: '#4A4A4A';
    gray90: '#2B2B2B';
    gray100: '#1A1A1A';
    // transparent
    transparent: 'transparent';
  }

  export interface OpacityProps {
    // white
    white30: string;
    white50: string;
    white70: string;

    // black
    black30: string;
    black50: string;
    black70: string;
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

  export interface TextColorProps {
    link: string;
    active: string;
    default: string;
    error: string;
    white: string;
    placeholder: string;
    disabled: string;
  }

  export interface ElementColorProps {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
    background: string;
    text: string;
  }

  export interface ThemeColorProps {
    light: ElementColorProps;
    dark: ElementColorProps;
  }

  export interface ColorsProps {
    text: TextColorProps;
    lightElement: ElementColorProps;
    darkElement: ElementColorProps;
    opacityElement: OpacityProps;
  }
}
