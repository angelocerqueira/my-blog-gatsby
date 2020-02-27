import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  ::-moz-selection{
    background: var(--highlight);
    color:#FFF;
  }
  ::selection {
    background:var(--highlight);
    color:#FFF;
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
    --border-side: #9159c1;
    --texts: #8899a6; /*ok*/
    --postColor: #fff; /*ok*/
    --highlight: #9159c1; /*ok*/
    --mediumBackground: #111; /*ok*/
    --background: #222333; /*ok*/
    --white: #fff;
    --black: #222;
    --shadow: #000;
    --hover-recommendeds: #9159c1;
    --titleHomeBg1:#9159c1;
    --titleHomeBg2:#a8c0ff;
    --cta2: #54009D;
    --cta1: #a8c0ff;
  }

  body.light {
    --borders: #ddd;
    --border-side: #2575fc;
    --postColor: #111;
    --texts: #333;
    --highlight: #2575fc;
    --mediumBackground: #a8c0ff;
    --background:#eee;
    --white: #fff;
    --black: #222;
    --shadow: #ddd;
    --hover-recommendeds: #2575fc;
    --titleHomeBg1: #6a11cb;
    --titleHomeBg2:#2575fc;
    --cta1: #6a11cb;
    --cta2: #2575fc;
  }
`;

export default GlobalStyle;
