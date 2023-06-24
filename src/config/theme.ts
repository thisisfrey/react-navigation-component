import { createTheme } from "@mui/material";
const { palette } = createTheme();
import THEME from "./constants";

const theme = createTheme({
  palette: {
    //mode: "dark",
    primary: palette.augmentColor({
      color: {
        main: THEME.color,
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
});

export default theme;
