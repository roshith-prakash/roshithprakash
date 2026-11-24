import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeProvider } from "./context/DarkModeContext";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}

