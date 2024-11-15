import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Navigate } from "react-router-dom";

import { AuthProvider } from "./providers/AuthProvider.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import UserProvider, { UserContext } from "./providers/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
