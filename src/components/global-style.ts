import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  accent: "#1A87DE",
  constructive: "#01A98C",
  destructive: "#F4492F",

  navBkg: "#FFF",
  navItemText: "#333",
  navActiveItemBkg: "#1A87DE",
  navActiveItemText: "#FFF",

  bodyBkg: "#F0F2F4",
  cardBkg: "#FFF",

  inputLine: "#D2D7E0",
  inputBkg: "#FFF",
  inputDisabledBkg: "#FAFBFC",

  shadow: "#000",

  defaultText: "#333",
  fadedText: "#999",
  inputLabelText: "#AAB2BB",

  buttonText: "#FFF",
  buttonDisabledBkg: "#DDD",
  buttonLogOutBkg: "#FFA135",

  graph1: "#1A87DE",
  graph2: "#F4492F",
  graph3: "#FFA135",
  graph4: "#01A98C",
  graph5: "#894CD6",
  graph6: "#70D5EB",
};

export const weights = {
  ultralight: 100,
  light: 200,
  thin: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800,
  black: 900,
};

export const delays = {
  short: ".2s",
  medium: ".5s",
  long: ".8s", //unused
};

export const misc = {
  borderRadius: "8px",
};

const GlobalStyle = createGlobalStyle`
    ${reset}

    :root {
        background-color: ${colors.bodyBkg};

        *, *::before, *::after {
            box-sizing: border-box;
        }

        &, input, select, textarea {
            color: ${colors.defaultText};
            font-size: 14px;
            line-height: 1.15;
            font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        }
    }

    main {
        max-width: 960px;
        margin: 32px auto;
        padding: 0 32px;
    }
`;

export default GlobalStyle;
