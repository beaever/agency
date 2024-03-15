"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fonts = exports.opacity = exports.palette = void 0;
/** @description color palette 선언 */
exports.palette = {
    // RED
    red10: '#FFF7F7',
    red20: '#FFE7E7',
    red30: '#FFDFDF',
    red40: '#FFBEBE',
    red50: '#FF9E9E',
    red60: '#FF7D7D',
    red70: '#FF5D5D',
    red80: '#ED1C24',
    red90: '#C00707',
    red100: '#A70006',
    //BLUE
    blue10: '#eaf3ff',
    blue20: '#D9E9FF',
    blue30: '#B9D5FF',
    blue40: '#9CC2F8',
    blue50: '#7FAFF5',
    blue60: '#5394F4',
    blue70: '#3381F2',
    blue80: '#0A68EF',
    blue90: '#0759D9',
    blue100: '#004DBC',
    // YELLOW
    yellow10: '#FFFBEB',
    yellow20: '#FCF5DF',
    yellow30: '#FCF1CA',
    yellow40: '#FDEBA4',
    yellow50: '#FFE47B',
    yellow60: '#FFD755',
    yellow70: '#FFCC2C',
    yellow80: '#FFC200',
    yellow90: '#EFB700',
    yellow100: '#DEAA00',
    // GREEN
    green10: '#EFF8F4',
    green20: '#D6F0E5',
    green30: '#B6E3D0',
    green40: '#7FCBAB',
    green50: '#5CB992',
    green60: '#4AA881',
    green70: '#429A75',
    green80: '#388E6A',
    green90: '#2B7E5B',
    green100: '#1E6C4B',
    // NAVY
    navy10: '#F8F9FB',
    navy20: '#F6F7F9',
    navy30: '#F0F1F4',
    navy40: '#EBEDF1',
    navy50: '#DEE0E8',
    navy60: '#C7CCD8',
    navy70: '#9AA3B9',
    navy80: '#6D7A99',
    navy90: '#40507A',
    navy100: '#003569',
    // AMBER
    amber10: '#FFF',
    amber20: '#FEE7DA',
    amber30: '#FEC7A8',
    amber40: '#FDA675',
    amber50: '#FC8643',
    amber60: '#FC762A',
    amber70: '#F05903',
    amber80: '#BD4603',
    amber90: '#8B3402',
    amber100: '#401801',
    // GRAYCALE
    gray10: '#FFF',
    gray20: '#FCFCFC',
    gray30: '#F7F7F7',
    gray40: '#EFEFEF',
    gray50: '#E6E6E6',
    gray60: '#ABABAB',
    gray70: '#727272',
    gray80: '#4A4A4A',
    gray90: '#2B2B2B',
    gray100: '#1A1A1A',
    // transparent
    transparent: 'transparent',
};
/** @description 투명도 */
exports.opacity = {
    white30: 'background-color: #fff; opacity: 30%;',
    white50: 'background-color: #fff; opacity: 50%;',
    white70: 'background-color: #fff; opacity: 70%;',
    // black
    black30: 'background-color: #1A1A1A; opacity: 30%;',
    black50: 'background-color: #1A1A1A; opacity: 50%;',
    black70: 'background-color: #1A1A1A; opacity: 70%;',
};
/** @description 서체 */
exports.Fonts = {
    // font-size
    // [size숫자] 보다 small, medium, large, 이런식으로 구분하는게 나을거 같기도 함
    size: {
        size40: 'font-size: 40px;',
        size35: 'font-size: 52px;',
        size26: 'font-size: 26px;',
        size18: 'font-size: 18px;',
        size16: 'font-size: 16px;',
        size14: 'font-size: 14px;',
        size12: 'font-size: 12px;',
    },
    //font-weight
    weight: {
        weight100: 'font-weight:100;',
        weight200: 'font-weight:200;',
        weight300: 'font-weight:300;',
        weight400: 'font-weight:400;',
        weight500: 'font-weight:500;',
        weight600: 'font-weight:600;',
        weight700: 'font-weight:700;',
        weight800: 'font-weight:800;',
        weight900: 'font-weight:900;',
    },
    // typography style
    style: {
        heading1: 'font-size:40px; font-weight:800; line-height:54px;',
        heading2: 'font-size:35px; font-weight:700; line-height:52px;',
        title1: 'font-size:26px; font-weight:800; line-height:42px;',
        title2: 'font-size:26px; font-weight:800; line-height:42px;',
        title3: 'font-size:26px; font-weight:500; line-height:42px;',
        subtitle1: 'font-size:18px; font-weight:700; line-height:30px;',
        subtitle2: 'font-size:18px; font-weight:500; line-height:30px;',
        subtitle3: 'font-size:18px; font-weight:400; line-height:30px;',
        body1: 'font-size:16px; font-weight:700; line-height:26px;',
        body2: 'font-size:16px; font-weight:500; line-height:26px;',
        body3: 'font-size:16px; font-weight:400; line-height:26px;',
        body4: 'font-size:14px; font-weight:700; line-height:22px;',
        body5: 'font-size:14px; font-weight:500; line-height:22px;',
        body6: 'font-size:14px; font-weight:400; line-height:22px;',
        detail1: 'font-size:12px; font-weight:500; line-height:18px;',
        detail2: 'font-size:12px; font-weight:400; line-height:18px;',
    },
};
