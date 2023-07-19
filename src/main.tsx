import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import constants from "./config/constants.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter basename={constants.BASE_URL}>
    <App />
  </BrowserRouter>
);





