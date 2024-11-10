import React, { Children } from "react";
import Users from "../../users/Users";

interface Props {
  children: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
