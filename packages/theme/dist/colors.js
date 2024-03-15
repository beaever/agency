"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
var values_1 = require("./values");
var text = {
    link: values_1.palette.blue70,
    active: values_1.palette.blue90,
    default: values_1.palette.gray90,
    error: values_1.palette.red60,
    white: values_1.palette.gray10,
    placeholder: values_1.palette.gray20,
    disabled: values_1.palette.gray30,
};
var lightElement = {
    primary: values_1.palette.blue100,
    secondary: values_1.palette.blue80,
    tertiary: values_1.palette.blue60,
    quaternary: values_1.palette.blue40,
    quinary: values_1.palette.blue20,
    background: values_1.palette.gray10,
    text: values_1.palette.gray90,
};
var darkElement = {
    primary: values_1.palette.amber100,
    secondary: values_1.palette.amber80,
    tertiary: values_1.palette.amber60,
    quaternary: values_1.palette.amber40,
    quinary: values_1.palette.amber20,
    background: values_1.palette.gray100,
    text: values_1.palette.gray10,
};
var opacityElement = values_1.opacity;
exports.colors = {
    text: text,
    lightElement: lightElement,
    darkElement: darkElement,
    opacityElement: opacityElement,
};
