import React, { useState } from "react";
import EditUser from "./EditUser";
import { Link, NavLink } from "react-router-dom";

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
  addNewStar: (user: User) => void;
}

export default function DisplayUsers({
  users,
  deleteUser,
  updateUser,
  addNewStar,
}: Props) {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <NavLink to={"/users/adduser"} className="add-user-link">
        Add user
      </NavLink>

      <div className="card-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={user.img}
              alt={`${user.username}'s avatar`}
              className="user-avatar"
            />
            <div className="user-info">
              <h3>{user.username}</h3>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
            </div>
            <div className="user-actions">
              <button
                onClick={() => {
                  updateUser(user);
                }}
              >
                <NavLink to={"/users/edit"}>Edit</NavLink>
              </button>

              <button onClick={() => addNewStar(user)} className="star-button">
                Add Star
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
