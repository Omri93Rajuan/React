import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import NewUser from "./NewUser";
import DisplayUsers from "./DisplayUsers";
import { Route, Routes } from "react-router-dom";
import StarsUsers from "./StarsUsers";
import EditUser from "./EditUser";
import DisplayUsers2 from "./DisplayUsers2";
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
  const [user, setuser] = useState<User>();

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
  const UpdateUser = (updatedUser: User) => {
    setusers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
  };

  const updateSetUser = (user: User) => {
    setuser(user);
  };
  const addNewStar = (newStar: User) => {
    setStars([...stars, newStar]);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DisplayUsers
              users={users}
              deleteUser={deleteUser}
              updateUser={updateSetUser}
              addNewStar={addNewStar}
            />
          }
        />
        <Route path="/adduser" element={<NewUser addUser={addNewUser} />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/display" element={<DisplayUsers2 />} />
      </Routes>
    </>
  );
}
