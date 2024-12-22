import { FontTypograpyNameType } from '@agency/theme';

export type TypographyBodyType = FontTypograpyNameType;

export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  body?: FontTypograpyNameType;
  color?: string;
  /** @desc table 컴포넌트에서 p 태그 대신 span 태그를 쓰기 위함 */
  isSpan?: boolean;
}
