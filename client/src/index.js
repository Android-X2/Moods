import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { YearContextProvider } from "./contexts/yearContexts";
import { AuthContextProvider } from "./contexts/AuthContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <YearContextProvider>
        <App />
      </YearContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
