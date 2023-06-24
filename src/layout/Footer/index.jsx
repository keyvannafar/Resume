// import "../Navbar.css";
import "./Footer.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarText({ text, path, icon }) {
  const setLanguage = useDispatch();
  const [Lan, setLan] = useState(false);
  return (
    <>
      <div>
        <li>
          {" "}
          <a className={`nav-link p-0`} aria-current="page" href={path}>
            {icon} {text}
          </a>        
        </li>      
      </div>
    </>
  );
}

export default NavbarText;
