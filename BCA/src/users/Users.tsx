import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import NewUser from "./NewUser";
import DisplayUsers from "./DisplayUsers";

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

  const deleteUser = (id: string) => {
    setusers(users.filter((user) => user.id !== id));
  };
  const UpdateUser = (user: User) => {
    console.log(user);
  };

  return (
    <>
      <DisplayUsers
        users={users}
        deleteUser={deleteUser}
        updateUser={UpdateUser}
      />
      <NewUser addUser={addNewUser} />
    </>
  );
}
