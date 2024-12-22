import { css } from '@agency/theme';
import { HeaderStyleProps } from './header.types';

export const containerStyle = ({ alignItems, justifyContent, height }: HeaderStyleProps) => css`
  width: 100%;
  height: ${height};
  display: flex;
  ${alignItems ? `align-items: ${alignItems};` : `align-items: center;`};
  ${justifyContent ? `justify-content: ${justifyContent};` : `justify-content: space-between;`}
  box-sizing: border-box;
`;

export const leftContainerStyle = css`
  display: flex;
`;

export const rightContainerStyle = css`
  display: flex;
`;

export const titleStyle = css``;

export const cursorStyle = (onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) => css`
  ${onClick && `cursor: pointer;`};
`;

/**
 * Header Item에 대한 스타일을 정의합니다.
 * @param {HeaderStyleProps} HeaderStyleProps - Header Item의 스타일 속성들을 포함하는 객체입니다.
 * @returns {import('@emotion/react').SerializedStyles} 정의된 스타일입니다.
 */
export const itemContainerStyle = ({
  alignItems,
  columnGap,
  gap,
  justifyContent,
  rowGap,
  flexDirection,
  width,
  height,
}: HeaderStyleProps) => css`
  display: flex;
  ${width && `width : ${width};`};
  ${height && `height: ${height};`};
  ${flexDirection && `flex-direction: ${flexDirection};`};
  ${alignItems && `align-items: ${alignItems};`};
  ${justifyContent && `justify-content: ${justifyContent};`};
  ${gap && `gap: ${gap};`};
  ${columnGap && `column-gap: ${columnGap};`};
  ${rowGap && `row-gap: ${rowGap};`};
`;
