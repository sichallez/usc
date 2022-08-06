import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <ul className="navbar-nav flex flex-row pl-0 list-style-none mr-auto text-3xl">
          <li className="nav-item p-2">
            <Link to="/home">HOME</Link>
          </li>
          <li className="nav-item p-2">
            <Link to="/liked">LIKED</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
