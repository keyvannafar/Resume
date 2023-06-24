import "../Navbar.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { EmojiSmileUpsideDownFill } from "react-bootstrap-icons";
function NavbarText({ text, path, icon }) {
  const Scroll = useSelector((state) => state.OnScroll.Scroll);
  const [underMenu, setunderMenu] = useState(false);
  const setMenuMob = useDispatch();
  return (
    <>
      <div id="home"></div>
        <li className="nav-item">
          <a
            className={`${
              Scroll == 0 ? `nav-link` : `nav-link nav-linkOnScroll`
            }`}
            aria-current="page"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {icon} {text}
          </a>
        </li>
    </>
  );
}

export default NavbarText;
