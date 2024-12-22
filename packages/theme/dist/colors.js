"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
const values_1 = require("./values");
const text = {
    link: values_1.palette.blue70,
    active: values_1.palette.blue90,
    default: values_1.palette.gray90,
    error: values_1.palette.red60,
    white: values_1.palette.gray10,
    placeholder: values_1.palette.gray20,
    disabled: values_1.palette.gray30,
};
const lightElement = {
    primary: values_1.palette.blue100,
    secondary: values_1.palette.blue80,
    tertiary: values_1.palette.blue60,
    quaternary: values_1.palette.blue40,
    quinary: values_1.palette.blue20,
    background: values_1.palette.gray10,
    text: values_1.palette.gray90,
};
const darkElement = {
    primary: values_1.palette.amber100,
    secondary: values_1.palette.amber80,
    tertiary: values_1.palette.amber60,
    quaternary: values_1.palette.amber40,
    quinary: values_1.palette.amber20,
    background: values_1.palette.gray100,
    text: values_1.palette.gray10,
};
const opacityElement = values_1.opacity;
const colors = {
    text,
    lightElement,
    darkElement,
    opacityElement,
};
exports.colors = colors;
