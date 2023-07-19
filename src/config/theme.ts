import { createTheme } from "@mui/material";
const { palette } = createTheme();
import constants from "./constants";

const theme = createTheme({
  palette: {
    //mode: "dark",
    primary: palette.augmentColor({
      color: {
        main: constants.THEME_COLOR,
      },
    }),
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: "60px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "48px",
    },
    h3: {
      fontWeight: 500,
      fontSize: "35px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          "&.Mui-disabled": {
            pointerEvents: "auto",
          },
          ":focus": { outline: "none" },
        },
        contained: {
          color: "white",
        },
        outlined: {
          backgroundColor: "white",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: { ":focus": { outline: "none" } },
      },
    },
  },
});

export default theme;
