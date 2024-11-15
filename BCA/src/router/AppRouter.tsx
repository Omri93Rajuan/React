import { Route, Routes } from "react-router-dom";
import Users from "../users/Users";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "../components/ProtectionRoutes/PrivateRoute";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/users/*"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route path="/users/*" element={<Users />} />
        <Route path="*" element={<h1>404 Who AM I?</h1>} />
      </Routes>
    </>
  );
}
