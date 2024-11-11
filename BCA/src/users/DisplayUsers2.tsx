import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { UserContext } from "../providers/UserProvider";

export default function DisplayUsers2() {
  // step 4
  // Use the useContext
  const { users } = useContext(UserContext);

  return (
    <>
      <PageHeader
        title="From Context"
        subtitle="This is the main page of users"
      />
      <NavLink to={"/users/adduser"} className="add-user-link">
        Add user
      </NavLink>

      <div className="card-list">
        {users!.map((user) => (
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
            <div className="user-actions"></div>
          </div>
        ))}
      </div>
    </>
  );
}
