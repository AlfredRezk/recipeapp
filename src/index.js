import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import GlobalStyles from "./Global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/Auth";
import { RecipeProvider } from "./context/Recipe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />

      <AuthProvider>
        <RecipeProvider>
          <App />
        </RecipeProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
