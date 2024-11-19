import React, { createContext, useState, ReactNode, useEffect } from "react";
import useFetch from "../hooks/useFetch";

interface IUser {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  isAdmin: boolean;
  image?: string;
  createdAt: Date;
}

interface UserDto {
  email: string;
  password: string;
}

interface AuthContextType {
  user: IUser | null;
  login: (user: UserDto) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { POST, data } = useFetch("http://localhost:7074");

  const [user, setUser] = useState<IUser | null>(null);

  const [error, setError] = useState<string | null>(null);

  // -----------LOGIN-----------
  const login = async (userFromClient: UserDto): Promise<boolean> => {
    try {
      const userData = await POST("auth/login", userFromClient);
      setUser(userData.foundUser);
      return true;
    } catch (error) {
      setError("Login failed. Please try again.");
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:7074/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Logout failed:", errorData.error?.message);
        return;
      }

      setUser(null);
    } catch (error) {
      console.error("An unexpected error occurred during logout:", error);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {error && (
        <div className="error-message">
          <h1>{error}</h1>
          <button onClick={() => setError(null)}>Dismiss</button>
        </div>
      )}
      {children}
    </AuthContext.Provider>
  );
};
