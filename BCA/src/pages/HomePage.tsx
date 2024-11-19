import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const { user, logout } = useContext(AuthContext) ?? {};
  console.log(user);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.fullName}!</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to={"/login"}>Please log in</NavLink>
        </>
      )}
    </div>
  );
};

export default HomePage;
