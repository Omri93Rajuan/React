import { Route, Routes } from "react-router-dom";
import Users from "../users/Users";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewUser from "../users/NewUser";
import DisplayUsers2 from "../users/DisplayUsers2";
import UserProvider from "../providers/UserProvider";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/display" element={<DisplayUsers2 />} />

        <Route path="*" element={<h1>404 Who AM I?</h1>} />
      </Routes>
    </>
  );
}
