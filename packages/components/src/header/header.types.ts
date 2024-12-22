interface HeaderProps<T, O> extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
  alignItems?: T;
  justifyContent?: O;
  height?: string;
}

interface HeaderChildernProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

type AlignItemsPropertyValueType =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'initial'
  | 'inherit';

type JustifyContentPropertyValueType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

type FlexDirectionPropertyValueType = 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';

interface HeaderStyleProps {
  /** @description gap Style을 정의 합니다 */
  gap?: string;
  /** @description row-gap Style을 정의 합니다 */
  rowGap?: string;
  /** @description column-gap Style을 정의 합니다 */
  columnGap?: string;
  /** @description align-items Style을 정의 합니다 */
  alignItems?: AlignItemsPropertyValueType;
  /** @description justify-content Style을 정의 합니다 */
  justifyContent?: JustifyContentPropertyValueType;
  /** @description flex-direction Style을 정의 합니다 */
  flexDirection?: FlexDirectionPropertyValueType;
  /** @description css Width */
  width?: string;
  /** @description css Height */
  height?: string;
}
interface HeaderItemProps extends HeaderChildernProps, HeaderStyleProps {}

interface HeaderCompoundComponentProps
  extends React.FC<HeaderProps<AlignItemsPropertyValueType, JustifyContentPropertyValueType>> {
  Item: ({ children }: HeaderItemProps) => JSX.Element;
  SubItem: ({ children }: HeaderItemProps) => JSX.Element;
  Logo: ({ children }: HeaderItemProps) => JSX.Element;
  SubMenu: ({ children }: HeaderChildernProps) => JSX.Element;
  Title: ({ children }: HeaderChildernProps) => JSX.Element;
}

export type {
  HeaderProps,
  AlignItemsPropertyValueType,
  FlexDirectionPropertyValueType,
  HeaderChildernProps,
  JustifyContentPropertyValueType,
  HeaderStyleProps,
  HeaderCompoundComponentProps,
  HeaderItemProps,
};
