import React, { useState } from "react";
import NewUser from "./NewUser";
import EditUser from "./EditUser";
interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}

interface Props {
  users: User[];
  deleteUser: (id: string) => void;
  updateUser: (user: User) => void;
}

export default function DisplayUsers({ users, deleteUser, updateUser }: Props) {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div className="card-list">
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
            <button onClick={() => deleteUser(user.id!)}>Delete</button>
            <button onClick={() => setFlag(true)}>Edit</button>
            {flag && <EditUser editUser={updateUser} user={user} />}
          </div>
        ))}
      </div>
    </>
  );
}
