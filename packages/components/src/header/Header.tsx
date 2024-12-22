import * as styles from './header.styles';
import {
  HeaderProps,
  AlignItemsPropertyValueType,
  HeaderChildernProps,
  JustifyContentPropertyValueType,
  HeaderCompoundComponentProps,
  HeaderItemProps,
} from './header.types';

const Header: HeaderCompoundComponentProps = (
  props: HeaderProps<AlignItemsPropertyValueType, JustifyContentPropertyValueType>,
) => {
  const { className, children, alignItems, justifyContent, height } = props;
  return (
    <header css={[styles.containerStyle({ alignItems, justifyContent, height })]} className={className} {...props}>
      {children}
    </header>
  );
};

const Item = ({
  children,
  className,
  alignItems,
  columnGap,
  gap,
  justifyContent,
  rowGap,
  flexDirection,
}: HeaderItemProps): JSX.Element => (
  <div
    css={styles.itemContainerStyle({ alignItems, columnGap, gap, justifyContent, rowGap, flexDirection })}
    className={className}
  >
    {children}
  </div>
);

const Logo = ({
  children,
  onClick,
  alignItems,
  className,
  columnGap,
  flexDirection,
  gap,
  justifyContent,
  rowGap,
}: HeaderItemProps): JSX.Element => (
  <div
    className={className}
    onClick={onClick}
    css={[
      styles.itemContainerStyle({ alignItems, columnGap, gap, justifyContent, rowGap, flexDirection }),
      styles.cursorStyle(onClick),
    ]}
  >
    {children}
  </div>
);
const SubMenu = ({ children, onClick }: HeaderChildernProps) => (
  <div onClick={onClick} css={styles.cursorStyle(onClick)}>
    {children}
  </div>
);

const Title = ({ children, onClick }: HeaderChildernProps) => (
  <h1 onClick={onClick} css={styles.cursorStyle(onClick)}>
    {children}
  </h1>
);

const SubItem = ({
  children,
  onClick,
  className,
  gap,
  alignItems,
  columnGap,
  flexDirection,
  justifyContent,
  rowGap,
  width,
  height,
}: HeaderItemProps) => (
  <div
    onClick={onClick}
    css={[
      styles.cursorStyle(onClick),
      styles.itemContainerStyle({ alignItems, columnGap, gap, justifyContent, rowGap, flexDirection, width, height }),
    ]}
    className={className}
  >
    {children}
  </div>
);

Header.Item = Item;
Header.SubItem = SubItem;
Header.Logo = Logo;
Header.SubMenu = SubMenu;
Header.Title = Title;

export { Header };
