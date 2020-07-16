import React, { ReactChild } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0A0082",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#71BF44",
      contrastText: "#ffffff",
    },
    error: {
      main: "#D72F6E",
      contrastText: "#ffffff",
    },
    info: {
      main: "#F4A782A",
      contrastText: "#ffffff",
    },
  },
  overrides: {
    MuiButton: {
      text: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      },
      label: {
        fontWeight: "bold",
      },
    },
  },
});

type ThemeProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
