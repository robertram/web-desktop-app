import { createGlobalStyle } from "styled-components";
import variables from '../variables';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    line-height: 1.5;
    transition: opacity 0.2s ease;
  }
  html {
    box-sizing: border-box;
    color: black;
    background: white;
    height: 100%;
    height: 100vh;
  }
  html, body, #__next {
    min-height: 100%;
    overflow: hidden;
  }
  .page {
    margin: 0 auto;
  }
  
`;

export default GlobalStyle;