import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active-link py-1" : "py-1")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/products"}
        className={({ isActive }) => (isActive ? "active-link py-1" : "py-1")}
      >
        Products
      </NavLink>
      <NavLink
        to={"mailto:irohbest@gmail.com"}
        className={({ isActive }) => (isActive ? "active-link py-1" : "py-1")}
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
