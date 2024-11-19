import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}

interface Props {
  children: React.ReactNode;
}

interface UserProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

// Step 1: Create Context
export const UserContext = React.createContext<UserProps | undefined>(
  undefined
);

export default function UserProvider({ children }: Props) {
  const [users, setUsers] = useState<User[]>([]);

  const { data, error, POST, GET } = useFetch<User[]>(
    "http://localhost:7074/data"
  );

  if (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
