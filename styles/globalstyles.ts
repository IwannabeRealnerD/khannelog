import { createGlobalStyle } from "styled-components";
import { maximumWidth } from "./responsivevars";

const GlobalStyle = createGlobalStyle`
    body {
        width: calc(100% - 30px);
        padding-top: 2em;
        margin-left: 15px;
        margin-right: 15px;
        word-break: keep-all;
        @media only screen and (min-width: ${maximumWidth}px) {
            margin-left: auto;
            margin-right: auto;
            max-width: 1100px;
        }
    }
    h1 {
        font-size:1.3em;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-block-start: 0px;
        margin-block-end: 0px;
  }
    button {
        cursor:pointer;
    }
`;

export default GlobalStyle;
