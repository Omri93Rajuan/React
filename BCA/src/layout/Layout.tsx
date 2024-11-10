import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main children={children} />
        <Footer />
      </div>
    </>
  );
}
