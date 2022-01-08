import { createGlobalStyle } from "styled-components";
import { colors } from "./utils";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    background-color: ${colors.veryDarkBlue}
  }
`;

export default GlobalStyle;
