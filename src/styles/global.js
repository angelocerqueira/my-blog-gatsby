import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #16202c;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  ol, ul,li {
    list-style: none;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  a {
    cursor: pointer;
  }
 `;

export default GlobalStyle;
