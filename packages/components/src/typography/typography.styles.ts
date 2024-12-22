import { css, fonts } from '@agency/theme';

export const displayStyle = css`
  display: inline-flex;
`;
export const colorStyle = (color?: string) => css`
  ${color && `color: ${color};`};
`;
export const body1Style = css`
  ${fonts.style.body1};
`;
export const body2Style = css`
  ${fonts.style.body2};
`;
export const body3Style = css`
  ${fonts.style.body3};
`;
export const body4Style = css`
  ${fonts.style.body4};
  white-space: pre-wrap;
`;
export const body5Style = css`
  ${fonts.style.body5};
`;
export const body6Style = css`
  ${fonts.style.body6};
`;

export const component1Style = css`
  ${fonts.style.component1};
`;

export const component2Style = css`
  ${fonts.style.component2};
`;
export const component3Style = css`
  ${fonts.style.component3};
`;
export const component4Style = css`
  ${fonts.style.component4};
`;
export const component5Style = css`
  ${fonts.style.component4};
`;
