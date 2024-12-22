import { css, fonts } from '@agency/theme';

export const heading1Style = (color?: string) => css`
  ${fonts.style.h1};
  ${color && `color: ${color};`};
`;
export const heading2Style = (color?: string) => css`
  ${fonts.style.h2};
  ${color && `color: ${color};`};
`;
export const heading3Style = (color?: string) => css`
  ${fonts.style.h3};
  ${color && `color: ${color};`};
`;
export const heading4Style = (color?: string) => css`
  ${fonts.style.h4};
  ${color && `color: ${color};`};
`;
export const heading5Style = (color?: string) => css`
  ${fonts.style.h5};
  ${color && `color: ${color};`};
`;
export const heading6Style = (color?: string) => css`
  ${fonts.style.h6};
  ${color && `color: ${color};`};
`;
export const heading7Style = (color?: string) => css`
  display: inline-flex;
  ${fonts.style.h7};
  ${color && `color: ${color};`};
`;
