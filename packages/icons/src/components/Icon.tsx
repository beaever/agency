import React, { useCallback, useRef } from 'react';
import * as icons from '../svg';
import { css } from '@agency/theme';

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
}

export interface IconBoxProps {
  name: IconType;
  rotate?: number;
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

const iconBoxStyle = (
  /** @description Icon 의 회전 값 */
  rotate: number,
  /** @description Icon 의 넓이 값 */
  width?: string,
  /** @description Icon 의 높이 값 */
  height?: string,
  /** @description Icon 의 색상 */
  color?: string,
  /** @description Icon 의 name */
) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: rotate(${rotate}deg);
  svg {
    width: ${width};
    height: ${height};

    // 아이콘을 감싸는 Box
    > rect:first-of-type {
      fill: none;
    }

    path,
    circle,
    g > rect {
      ${`fill: ${color}`};
    }
  }
`;

export const Icon = ({
  name,
  rotate = 0,
  width = '20px',
  height = '20px',
  color = '#3A3A3A',
  className,
}: IconBoxProps): JSX.Element => {
  const iconRef = useRef<HTMLDivElement | null>(null);

  // SVG 아이콘 요소 템플릿
  const SVGIcon = useCallback(
    ({ name }: IconProps) => {
      const viewBox = '0 0 32 32';
      return React.createElement(icons[name], { viewBox });
    },
    [name],
  );

  return (
    <div css={iconBoxStyle(rotate, width, height, color)} className={className} ref={iconRef}>
      <SVGIcon name={name} />
    </div>
  );
};
