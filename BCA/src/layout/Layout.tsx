import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Main name="Gadi" email="@gmail.co.il" />
      <Footer />
    </>
  );
}
