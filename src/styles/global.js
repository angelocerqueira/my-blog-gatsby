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

   body.dark {
    --borders: #38444d; /*ok*/
    --texts: #8899a6; /*ok*/
    --postColor: #fff; /*ok*/
    --highlight: #1fa1f2; /*ok*/
    --mediumBackground: #192734; /*ok*/
    --background: #16202c; /*ok*/
    --white: #fff;
    --black: #222;
  }
  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #1fa1f2;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
  }
 `;

export default GlobalStyle;
