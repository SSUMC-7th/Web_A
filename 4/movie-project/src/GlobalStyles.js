import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body {
    color: white;
    background-color: black;
    font-family: Arial, sans-serif;
  }
  img{
    display:block;
  }
`;

export default GlobalStyles;
