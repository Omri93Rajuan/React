import React, { useEffect, useState } from "react";
interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}
interface Props {
  users: User[];
}

export default function StarsUsers({ users }: Props) {
  return (
    <>
      <h1>הכוכבים של מיקי!</h1>
      <div
        className="card-list"
        style={{ backgroundColor: users.length === 5 ? "red" : "magenta" }}
      >
        {users.map((user) => (
          <div key={user.id} className="card">
            <h3>{user.username}</h3>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <img
              src={user.img}
              alt={`${user.username}'s avatar`}
              style={{ width: "100px", height: "100px" }}
            />
            <h1 style={{ display: users.length === 5 ? "block" : "none" }}></h1>
          </div>
        ))}
      </div>
    </>
  );
}
