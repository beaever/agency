import { TypographyProps, TypographyBodyType } from './typography.types';
import * as styles from './typography.styles';

const Typography = ({ body = 'body4', color, isSpan = true, ...props }: TypographyProps): JSX.Element => {
  const getTypograpyStyles = (currentBody: TypographyBodyType) => {
    switch (currentBody) {
      case 'body1':
        return styles.body1Style;
      case 'body2':
        return styles.body2Style;
      case 'body3':
        return styles.body3Style;
      case 'body4':
        return styles.body4Style;
      case 'body5':
        return styles.body5Style;
      case 'body6':
        return styles.body6Style;
      case 'component1':
        return styles.component1Style;
      case 'component2':
        return styles.component2Style;
      case 'component3':
        return styles.component3Style;
      case 'component4':
        return styles.component4Style;
      case 'component5':
        return styles.component5Style;
      default:
        return styles.body4Style;
    }
  };
  return (
    <>
      {isSpan && body === 'body4' ? (
        <p css={[styles.displayStyle, getTypograpyStyles(body), styles.colorStyle(color)]} {...props} />
      ) : (
        <span css={[styles.displayStyle, getTypograpyStyles(body), styles.colorStyle(color)]} {...props} />
      )}
    </>
  );
};

export { Typography };
