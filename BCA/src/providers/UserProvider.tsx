import React, { useEffect, useState } from "react";
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
interface Props {
  children: React.ReactNode;
}

interface UserProps {
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

// Step 1: Create Context
export const UserContext = React.createContext<UserProps | undefined>(
  undefined
);

export default function UserProvider({ children }: Props) {
  const [users, setUsers] = useState<IUser[]>([]);

  const { data, GET } = useFetch<IUser[]>("http://localhost:7074/data");

  useEffect(() => {
    GET();
  }, []);

  useEffect(() => {
    if (data) return setUsers(data);
    console.log("No data Brooooo...");
  }, [data]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}
