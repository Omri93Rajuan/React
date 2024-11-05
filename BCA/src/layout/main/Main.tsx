import React from "react";

interface PropsInterface {
  mikiIsTheBestStudentInTheWorld: (name: string) => void;
}

export default function Main(props: PropsInterface) {
  return (
    <>
      <div style={{ minHeight: "10vh" }}></div>
      <button onClick={() => props.mikiIsTheBestStudentInTheWorld("Meni")}>
        Click me
      </button>
    </>
  );
}
