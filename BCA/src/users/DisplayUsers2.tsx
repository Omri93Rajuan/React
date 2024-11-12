import { useContext } from "react";
import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { UserContext } from "../providers/UserProvider";
import { starsContext } from "../providers/StarsProvider";

export default function DisplayUsers2() {
  // step 4
  // Use the useContext
  const { users, setUsers } = useContext(UserContext);
  const { stars, setStars } = useContext(starsContext);

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
            <button
              onClick={() => {
                setUsers(users.filter((prevUser) => prevUser.id !== user.id));
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                setStars([...stars, user]);
              }}
            >
              Add Star
            </button>
            <div className="user-actions"></div>
          </div>
        ))}
      </div>
      <PageHeader title="Stars" subtitle="This is my STAR'S!!" />
      <div className="card-list">
        {stars!.map((user) => (
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
            <button
              onClick={() => {
                setStars(stars.filter((prevUser) => prevUser.id !== user.id));
              }}
            >
              Delete
            </button>
            <div className="user-actions"></div>
          </div>
        ))}
      </div>
      {stars.length === 0 && <h1>Sorry but there no Stars</h1>}
    </>
  );
}
