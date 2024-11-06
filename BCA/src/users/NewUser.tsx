import React, { useState } from "react";

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

  const handleSubmit = () => {
    props.addUser({
      username,
      email,
      age,
      img,
    });
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">UserName</label>
            <input
              name="userName"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />{" "}
          </div>

          <div className="form-group">
            <label htmlFor="img">Img</label>
            <input
              name="img"
              type="text"
              onChange={(event) => {
                setImg(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              name="age"
              type="text"
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
