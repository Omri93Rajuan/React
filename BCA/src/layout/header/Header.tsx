import React from "react";
import Link_nav_bar from "../../components/Link_nav_bar";

export default function Header() {
  return (
    <>
      <header>
        <h1>Business card app</h1>
        <ul>
          <li>
            <Link_nav_bar to="/" InnerText="Home" />
          </li>
          <li>
            {" "}
            <Link_nav_bar to="/users" InnerText="Users" />
          </li>
          <li>
            {" "}
            <Link_nav_bar to="/about" InnerText="About" />
          </li>
          <li>
            {" "}
            <Link_nav_bar to="/users/display" InnerText="Display" />
          </li>
        </ul>
      </header>
    </>
  );
}
