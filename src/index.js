import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { ContextProvider } from "./context/auth-context";
import Attribution from "./components/atribution/Atribution";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
      <ContextProvider>
        <App />
      </ContextProvider>
      <Attribution />
  </div>
);
