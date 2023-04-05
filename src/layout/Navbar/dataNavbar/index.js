//import './App.css';
import "../Navbar.css";
// import { categories } from "../data.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
function NavbarText({ text, path, icon }) {
  const Scroll = useSelector((state) => state.OnScroll.Scroll);
  return (
    <>
      <div id="home"></div>
      <li className="nav-item">
        <a
          className={`${Scroll == 0 ? `nav-link` : `nav-linkOnScroll`}`}
          aria-current="page"
          href={path}
        >
          {icon} {text}
        </a>
      </li>
    </>
  );
}

export default NavbarText;
