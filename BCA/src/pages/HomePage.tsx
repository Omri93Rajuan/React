import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const authContext = useContext(AuthContext);

  return (
    <div>
      {authContext?.user ? (
        <>
          <h1>Welcome, {authContext.user.name}!</h1>
          <button onClick={authContext.logout}>Logout</button>
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
