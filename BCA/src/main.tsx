import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./providers/UserProvider.tsx";
import StarsProvider from "./providers/StarsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <StarsProvider>
          <App />
        </StarsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
