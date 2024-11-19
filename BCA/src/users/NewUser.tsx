import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import useFetch from "../hooks/useFetch";

interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}
const EditUser: React.FC = () => {
  const { setUsers, users } = useContext(UserContext) ?? {};
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState("");

  // שימוש ב-useFetch
  const { error, POST } = useFetch<User>("http://localhost:7700/users");

  useEffect(() => {
    if (id) {
      const findUser = users?.find((u) => u.id === id);
      if (findUser) {
        setUsername(findUser.username);
        setEmail(findUser.email);
        setAge(findUser.age);
        setImg(findUser.img);
      }
    }
  }, [id, users]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      id: id ?? crypto.randomUUID(),
      username,
      email,
      age,
      img,
    };

    if (!id) {
      await POST(newUser);

      if (!error) {
        setUsers?.((prevUsers) => [...prevUsers, newUser]);
      } else {
        console.error("Error creating user:", error);
      }
    } else {
      setUsers?.((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? newUser : user))
      );
    }

    navigate("/users/display");
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              value={username}
              placeholder="Enter your User Name"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="img">Img</label>
            <input
              id="img"
              type="text"
              value={img}
              placeholder="Enter your Pic"
              onChange={(event) => setImg(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              min={0}
              value={age}
              placeholder="0"
              onChange={(event) => setAge(Number(event.target.value))}
              required
            />
          </div>

          <button type="submit">{id ? "Update User" : "Add User"}</button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
