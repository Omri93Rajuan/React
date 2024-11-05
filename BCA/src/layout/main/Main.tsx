import React from "react";

interface PropsInterface {
  propsFromParent: (name: string) => void | undefined;
}

export default function Main(props: PropsInterface) {
  return (
    <>
      <div style={{ minHeight: "10vh" }}></div>

      <button onClick={() => props.propsFromParent("Meni")}>Click me</button>
    </>
  );
}
