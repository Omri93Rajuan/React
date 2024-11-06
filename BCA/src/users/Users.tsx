import React, { useState } from "react";
import { v4 } from "uuid";
import NewUser from "./NewUser";

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}

export default function Users() {
  const [users, setusers] = useState<User[]>([]);

  const addNewUser = (newUser: User) => {
    newUser.id = v4();
    setusers([...users, newUser]);
  };

  // const deleteUser = () => {
  // }

  return (
    <>
      <NewUser addUser={addNewUser} />
    </>
  );
}
