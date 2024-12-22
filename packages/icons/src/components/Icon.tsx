import { colors, css } from '@agency/theme';
import { createElement, FunctionComponent, SVGProps, useRef } from 'react';
import * as icons from '../svg';

export type IconType = keyof typeof icons;

export interface IconProps {
  name: IconType;
}

export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  name: IconType;
  rotate?: number;
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  isNotHover?: boolean;
}

export interface IconSVGIconProps extends Pick<IconBoxProps, 'name' | 'color'> {}

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
  name?: IconType,
  /** @description Icon Hover Style 적용 여부 */
  isNotHover?: boolean,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return css`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(${rotate}deg);
    svg {
      width: ${width ?? '20px'};
      height: ${height ?? '20px'};
      // 아이콘을 감싸는 Box
      > rect:first-of-type {
        fill: none;
      }
      path,
      circle,
      g > rect {
        &:hover {
          ${isNotHover && `fill: ${colors};`};
        }
      }
    }
  `;
};

export const Icon = ({
  name,
  rotate = 0,
  width = '20px',
  height = '20px',
  color = '#3A3A3A',
  className,
  isNotHover,
  ...props
}: IconBoxProps): JSX.Element => {
  const iconRef = useRef<HTMLDivElement | null>(null);

  // SVG 아이콘 요소 템플릿
  const SVGIcon = ({ name }: IconProps) => {
    const viewBox = '0 0 32 32';
    return createElement(icons[name] as unknown as FunctionComponent<SVGProps<SVGSVGElement>>, { viewBox: viewBox });
  };

  return (
    <div
      {...props}
      css={iconBoxStyle(rotate, width, height, color, name, isNotHover)}
      className={className}
      ref={iconRef}
    >
      <SVGIcon name={name} />
    </div>
  );
};
