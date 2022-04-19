import React from "react";
import { CssBaseline } from "@mui/material";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router } from "react-router-dom";
import MyRoutes from "./MyRoutes";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <Router>
        <CookiesProvider>
          <CssBaseline />
          <MyRoutes />
        </CookiesProvider>
      </Router>
    </Provider>
  );
}

export default App;
