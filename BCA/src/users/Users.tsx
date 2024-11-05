import React, { useState } from "react";
import NewUser from "./newUser";

interface User {
  userName: string;
}
export default function Users() {
  const [users, setusers] = useState<User[]>([]);

  const addNewUser = (newUser: User): void => {
    setusers([...users, newUser]);
  };
  console.log(users);
  return (
    <>
      <div>Users</div>
      <NewUser addNewUser={addNewUser} />
    </>
  );
}
