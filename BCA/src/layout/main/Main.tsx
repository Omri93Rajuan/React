import React from "react";

interface PropsInterface {
  name: string;
  email: string;
}

export default function Main({ name, email }: PropsInterface) {
  return (
    <>
      <div style={{ minHeight: "92.5vh" }}>
        <h1>{name}</h1>
        <h1>{email}</h1>
      </div>
    </>
  );
}
