import { createGlobalStyle } from "styled-components";
import { maximumWidth } from "./responsivevars";

const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
        @media only screen and (min-width: ${maximumWidth}px) {
            margin-left: auto;
            margin-right: auto;
            max-width: 1100px;
        }
    }
    h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-block-start: 0px;
    margin-block-end: 0px;
  }
`;

export default GlobalStyle;
