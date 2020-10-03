import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyled";
import Theme from "../Styles/Theme";
import Router from "./Routes";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};
