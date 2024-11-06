import React, { useEffect, useState } from "react";

interface User {
  username: string;
  email: string;
  age: number;
  img: string;
}

interface Props {
  addUser: (newuser: User) => void;
}

export default function NewUser(props: Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [img, setImg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addUser({
      username,
      email,
      age,
      img,
    });
    setUsername("");
    setEmail("");
    setAge(0);
    setImg("");
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

          <button type="submit">Add New User</button>
        </form>
      </div>
    </>
  );
}
