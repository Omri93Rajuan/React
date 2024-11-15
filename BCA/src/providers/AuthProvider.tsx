import React, { createContext, useState, ReactNode } from "react";
import { useError } from "./ErrorProvider";

interface User {
  _id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { setError } = useError(); // שימוש ב-ErrorContext

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:7700/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorMessage = `Login failed with status: ${response.status}`;
        setError(errorMessage); // הגדרת הודעת שגיאה
        return false;
      }

      const data = await response.json();
      if (data.foundUser) {
        setUser(data.foundUser);
        return true;
      }
      setError("User not found");
      return false;
    } catch (error) {
      setError("Network error: Unable to login");
      return false;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:7700/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        setUser(null);
      } else {
        setError("Failed to log out");
      }
    } catch (error) {
      setError("Network error: Unable to logout");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
