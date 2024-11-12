import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const EditUser: React.FC = () => {
  const { setUsers, users } = useContext(UserContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    const findUser = users.find((u) => u.id === id);
    if (findUser) {
      setUsername(findUser.username);
      setEmail(findUser.email);
      setAge(findUser.age);
      setImg(findUser.img);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, username, email, age, img } : user
      )
    );
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
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              placeholder="Enter your Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="img">Img</label>
            <input
              id="img"
              type="text"
              value={img}
              placeholder="Enter your Pic"
              onChange={(event) => {
                setImg(event.target.value);
              }}
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
              onChange={(event) => {
                setAge(Number(event.target.value));
              }}
            />
          </div>

          <button type="submit">Save!!</button>
        </form>
      </div>
    </>
  );
};

export default EditUser;
