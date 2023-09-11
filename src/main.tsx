import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ResultProvider from "./providers/ResultProvider.tsx";
import ThemeProvider from "./providers/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResultProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ResultProvider>
  </React.StrictMode>
);
