import { createGlobalStyle } from "styled-components";
import { maximumWidth } from "./responsivevars";

const GlobalStyle = createGlobalStyle`
    body {
        width: calc(100% - 30px);
        padding-top: 3em;
        margin-left: 15px;
        margin-right: 15px;
        word-break: keep-all;
        @media only screen and (min-width: ${maximumWidth}px) {
            margin-left: auto;
            margin-right: auto;
            max-width: 1000px;
        }
    }

    h2 {
        font-size:1.2em;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-block-start: 0px;
        margin-block-end: 0px;
        font-family: "Inknut Antiqua", serif;
    }

    button {
        background-color: transparent;
        cursor:pointer;
        border-radius: 5px;
        font-size: 15px;
        padding:0.3em;
    }
`;

export default GlobalStyle;
