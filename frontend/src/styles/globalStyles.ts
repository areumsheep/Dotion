import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
 #root, html, body {
   height: 100%;
 }
 a {
  text-decoration: none;
 }

 h1 {
   font-weight: 900;
 }
`;

export default GlobalStyles;
