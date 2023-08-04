import "../Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { EmojiSmileUpsideDownFill } from "react-bootstrap-icons";
function NavbarText({ text, path, icon }) {
  const Scroll = useSelector((state) => state.OnScroll.Scroll);
  const [underMenu, setunderMenu] = useState(false);
  const setMenuMob = useDispatch();
  function located(){
    if (path !== "/"){ window.location.assign(path);} else {window.location.assign("#home")}
  }
  return (
    <>
      <div id="home"></div>
      <li className="nav-item">
        <Link
          to={path}
          className={`${
            Scroll == 0 ? `nav-link` : `nav-link nav-linkOnScroll`
          }`} onClick={located}
        >
          {icon} {text}
        </Link>
      </li>
    </>
  );
}

export default NavbarText;
