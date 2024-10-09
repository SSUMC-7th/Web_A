import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }
  body {
    color: white;
    background-color: black;
    font-family: Arial, sans-serif;
  }
  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyles;
