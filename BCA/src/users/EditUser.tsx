import React, { useEffect, useState } from "react";
interface User {
  id?: string;
  username: string;
  email: string;
  age: number;
  img: string;
}
interface Props {
  editUser: (user: User) => void;
  user: User;
}
export default function EditUser(props: Props) {
  const [username, setusername] = useState("");

  useEffect(() => {
    setusername(props.user.username);
  }, []);

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      ;
      <button
        onClick={() => props.editUser({ ...props.user, username })}
      ></button>
    </>
  );
}
