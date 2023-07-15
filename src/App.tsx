import "./App.css";
import Navigation from "./shared/navigation/NavigationX";
import Routing from "./shared/routing/Routing";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navigation>
          <Routing />
        </Navigation>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

