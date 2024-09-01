import { css, Global, ThemeProvider, useTheme } from "@emotion/react";
import { lightTheme, darkTheme } from "../src/styles/values/theme";

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

// Sets the background based on theme
const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Pretendard";
          src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
            format("woff");
          font-style: normal;
        }
        html,
        body {
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
          font-family: "Pretendard", sans-serif;
        }
      `}
    />
  );
};

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES["light"]}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  );
};
