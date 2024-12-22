import { TextColorProps, ElementColorProps, ColorsProps, OpacityProps } from '@emotion/react';
import { palette, opacity } from './values';

const text: TextColorProps = {
  link: palette.blue70,
  active: palette.blue90,
  default: palette.gray90,
  error: palette.red60,
  white: palette.gray10,
  placeholder: palette.gray20,
  disabled: palette.gray30,
};

const lightElement: ElementColorProps = {
  primary: palette.blue100,
  secondary: palette.blue80,
  tertiary: palette.blue60,
  quaternary: palette.blue40,
  quinary: palette.blue20,
  background: palette.gray10,
  text: palette.gray90,
};

const darkElement: ElementColorProps = {
  primary: palette.amber100,
  secondary: palette.amber80,
  tertiary: palette.amber60,
  quaternary: palette.amber40,
  quinary: palette.amber20,
  background: palette.gray100,
  text: palette.gray10,
};

const opacityElement: OpacityProps = opacity;

const colors: ColorsProps = {
  text,
  lightElement,
  darkElement,
  opacityElement,
};

export { colors };
