import { useContext } from "react";
import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { UserContext } from "../providers/UserProvider";

export default function DisplayUsers2() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    return <p>Error: User context is not available.</p>;
  }

  const { users } = userContext;

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
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="user-card">
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
