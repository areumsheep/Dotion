import { Theme } from '@/styles/theme';
import { CSSProp, CSSObject } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// typescript에서 속성에 css를 적용할 수 있도록 설정
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
