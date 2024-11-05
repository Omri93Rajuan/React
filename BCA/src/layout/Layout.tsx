import React, { useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Brother from "./main/Brother";

export default function Layout() {
  const [name, setName] = useState("Nimrod");

  return (
    <>
      <Header />
      <Brother name={name} />
      <Main propsFromParent={setName} />
      <Footer />
    </>
  );
}
