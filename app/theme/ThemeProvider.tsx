"use client";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#ff5252",
//     },
//   },
});

interface IProps {
  children: JSX.Element;
}

export const ThemeProvider = ({ children }: IProps) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
