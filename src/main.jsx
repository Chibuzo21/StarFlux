import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TonConnectUIProvider manifestUrl="https://test-youtube.s3.amazonw5.com/manifest.json">
        <App />
      </TonConnectUIProvider>
    </BrowserRouter>
  </StrictMode>
);
