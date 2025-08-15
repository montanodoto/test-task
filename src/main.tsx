import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import App from "./App";

import { GlobalStyle } from "./styles";

import 'react-loading-skeleton/dist/skeleton.css';
import 'keen-slider/keen-slider.min.css';

const theme = {
  spacing: (n: number) => `${n * 4}px`,
  colors: { brand: "#4e8cff" }
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
