import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useContext(AuthContext) ?? {};
  const a = ["c", "b", "c"];
  if (!user) {
    // console.error("Miki is not provided");
    // console.log("Miki is not provided");
    // console.warn("Miki is not provided");
    // console.table(a);
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
