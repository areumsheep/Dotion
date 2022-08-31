import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import '@/assets/css/font.css';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
  }
  #root, html, body {
    height: 100%;
    font-family: 'Pretendard', sans-serif;
 }
 input, textarea, button {
  font-family: inherit
}

 a {
  text-decoration: none;
 }
 h1 {
   font-weight: 900;
 }
`;

export default GlobalStyles;
