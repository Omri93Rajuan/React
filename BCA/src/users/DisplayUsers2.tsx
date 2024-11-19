import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";
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

export default function DisplayUsers2() {
  const { data, GET } = useFetch("http://localhost:7074/data");
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    GET();
  }, []);

  useEffect(() => {
    if (data) return setUsers(data);
    console.log("No data Brooooo...");
  }, [data]);

  return (
    <>
      <PageHeader
        title="User Gallery"
        subtitle="Here are the users from the context"
      />
      <NavLink to={"/users/adduser"} className="add-user-link">
        Add user
      </NavLink>

      <div className="card-list">
        {users && users.length > 0 ? (
          users.map((user) => (
            <div key={user.email} className="user-card">
              <img
                src={user.image || "default-avatar.jpg"} // תצוגת תמונה ברירת מחדל
                alt={`${user.fullName}'s avatar`}
                className="user-avatar"
              />
              <h3>{user.fullName}</h3>
            </div>
          ))
        ) : (
          <p>No users available.</p>
        )}
      </div>
    </>
  );
}
