
import "./Navbar.css";
import De from "../images/languageIcon/de.jpg";
import En from "../images/languageIcon/en.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavData } from "./dataNavbar/DataNav";
import { NavDataEnglisch } from "./dataNavbar/DataNav";
import NavbarText from "./dataNavbar";
function Navbar() {
  const setLanguage = useDispatch();
  const setId = useDispatch();
  const [Lan, setLan] = useState(false);
  const Language = useSelector((state) => state.LanChange.Language);
  function toggleLan() {
    setLan(!Lan);
    Lan == false
      ? setLanguage({ type: "Englisch" })
      : setLanguage({ type: "Deutsch" });
  }
  return (
    <>
      <div id="home"></div>
      <nav className="navbar mainnav navbar-expand-lg navbar-light">
        <div className="container-fluid container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {Language == false
                ? NavData.map((item) => <NavbarText key={item.id} {...item} />)
                : NavDataEnglisch.map((item) => (
                    <NavbarText key={item.id} {...item} />
                  ))}
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              {Lan == true ? (
                <div className="lanMenuIcon">
                  <img src={En} />
                </div>
              ) : (
                <div className="lanMenuIcon">
                  <img src={De} />
                </div>
              )}
            </button>
            <div class="dropdown-content">
              <a href="#">
                {Lan == true ? (
                  <Link class="dropdown-item" to="#" onClick={toggleLan}>
                    <div className="lanRow">
                      <span className="lanText">De </span>
                      <div className="lanIcon">
                        <img src={De} />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link class="dropdown-item" to="#" onClick={toggleLan}>
                    <div className="lanRow">
                      <span className="lanText">En </span>
                      <div className="lanIcon">
                        <img src={En} />
                      </div>
                    </div>
                  </Link>
                )}
              </a>
            </div>
          </div>
          <a
            className="text-white"
            href="https://www.linkedin.com/in/mohammad-mehdi-nafarzadeh-028917240/"
          >
            <i class="bi bi-linkedin nav-link px-2 text-muted"></i>
          </a>
          <a className="text-white" href="https://github.com/keyvannafar">
            <i class="bi bi-github nav-link px-2 text-muted"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
