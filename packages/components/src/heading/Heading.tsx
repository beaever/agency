import { HeadingContainerProps, HeadingH7Props, HeadingProps } from './heading.types';
import * as style from './heading.styles';

/** @description Heading 의 값을 여러개 불러 사용해야한다라면 Heading 만 import 하여 사용하기 위함  */
const Heading = ({ children }: HeadingContainerProps): JSX.Element => <>{children}</>;

const H1: React.FC<HeadingProps> = (props): JSX.Element => <h1 css={style.heading1Style(props.color)} {...props} />;
const H2: React.FC<HeadingProps> = (props): JSX.Element => <h2 css={style.heading2Style(props.color)} {...props} />;
const H3: React.FC<HeadingProps> = (props): JSX.Element => <h3 css={style.heading3Style(props.color)} {...props} />;
const H4: React.FC<HeadingProps> = (props): JSX.Element => <h4 css={style.heading4Style(props.color)} {...props} />;
const H5: React.FC<HeadingProps> = (props): JSX.Element => <h5 css={style.heading5Style(props.color)} {...props} />;
const H6: React.FC<HeadingProps> = (props): JSX.Element => <h6 css={style.heading6Style(props.color)} {...props} />;
const H7: React.FC<HeadingH7Props> = (props): JSX.Element => <span css={style.heading7Style(props.color)} {...props} />;

Heading.H1 = H1;
Heading.H2 = H2;
Heading.H3 = H3;
Heading.H4 = H4;
Heading.H5 = H5;
Heading.H6 = H6;
Heading.H7 = H7;

export { Heading, H1, H2, H3, H4, H5, H6, H7 };
