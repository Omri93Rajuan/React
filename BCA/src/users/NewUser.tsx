import React from "react";

interface User {
  userName: string;
}

interface Props {
  addNewUser: (user: User) => void;
}

export default function NewUser(props: Props) {
  return (
    <div>
      <button onClick={() => props.addNewUser({ userName: "Miki" })}>
        Click
      </button>
    </div>
  );
}
