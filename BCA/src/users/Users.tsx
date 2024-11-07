import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import NewUser from "./NewUser";
import DisplayUsers from "./DisplayUsers";
import StarsUsers from "./StarsUsers";
interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}

export default function Users() {
  const [users, setusers] = useState<User[]>([]);
  const [stars, setStars] = useState<User[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setusers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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
  const addNewStar = (newStar: User) => {
    setStars([...stars, newStar]);
  };
  return (
    <>
      <DisplayUsers
        users={users}
        deleteUser={deleteUser}
        updateUser={UpdateUser}
        addNewStar={addNewStar}
      />
      {stars && <StarsUsers users={stars} />}
      <NewUser addUser={addNewUser} />
    </>
  );
}
