import { createTheme } from "@mui/material";
const { palette } = createTheme();
import app from "./constants";

const theme = createTheme({
  palette: {
    //mode: "dark",
    primary: palette.augmentColor({
      color: {
        main: app.THEME_COLOR,
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
          color: "white",
          "&.Mui-disabled": {
            pointerEvents: "auto",
          },
          ":focus": { outline: "none" },
        },
      },
    },
  },
});

export default theme;
