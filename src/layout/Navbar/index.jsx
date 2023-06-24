import "./Navbar.css";
import De from "../../images/languageIcon/de.jpg";
import En from "../../images/languageIcon/en.jpg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavData } from "./dataNavbar/DataNav";
import { NavDataEnglisch } from "./dataNavbar/DataNav";
import NavbarText from "./dataNavbar";
function Navbar() {
  const setLanguage = useDispatch();
  const [ltMode, setltMode] = useState(false);
  const setLightMode = useDispatch();
  const [Lan, setLan] = useState(false);
  const setScroll = useDispatch();
  const Language = useSelector((state) => state.LanChange.Language);
  const Scroll = useSelector((state) => state.OnScroll.Scroll);
  const MenuMob = useSelector((state) => state.ToggleMenu.MenuMob);
  function toggleLan() {
    setLan(!Lan);
    Lan == false
      ? setLanguage({ type: "Englisch" })
      : setLanguage({ type: "Deutsch" });
  }
  function LightMode() {
    setltMode(!ltMode);
    ltMode == false
      ? setLightMode({ type: "LightModeOff" })
      : setLightMode({ type: "LightModeOn" });
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll({ type: "menuOnScroll" });
      } else {
        setScroll({ type: "zeroScroll" });
      }
    });
  }, []);
  return (
    <>
      <div id="home"></div>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${
          ltMode == false && Scroll == 0
            ? `mainnav`
            : Scroll == 1 && ltMode == false
            ? "mainnavOnScroll"
            : ltMode == true && Scroll == 0
            ? `mainnav bg-white light`
            : Scroll == 1 && ltMode == true
            ? "mainnavOnScroll"
            : "mainnav"
        }`}
      >
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
          <div
            className={`collapse navbar-collapse ${
              MenuMob == false ? "" : "d-none"
            }`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">    
                {Language == false
                  ? NavData.map((item) => (
                      <NavbarText key={item.id} {...item} />
                    ))
                  : NavDataEnglisch.map((item) => (
                      <NavbarText key={item.id} {...item} />
                    ))}
            </div>
          </div>
          <div>
            <i className="bi bi-moon-stars"></i>{" "}
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" onClick={LightMode}></span>
            </label>{" "}
            <i className="bi bi-brightness-high"></i>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
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

            <div className="dropdown-content">
              <a href="#">
                {Lan == true ? (
                  <Link className="dropdown-item" to="#" onClick={toggleLan}>
                    <div className="lanRow">
                      <span className="lanText">De </span>
                      <div className="lanIcon">
                        <img src={De} />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link className="dropdown-item" to="#" onClick={toggleLan}>
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
            className={`${Scroll == 1 ? `headerIconOnScroll` : "headerIcon"}`}
            href="https://www.linkedin.com/in/mohammad-mehdi-nafarzadeh-028917240/"
            target="_blank"
          >
            <i className="bi bi-linkedin nav-link px-2 text-muted"></i>
          </a>
          <a
            className={`${Scroll == 1 ? `headerIconOnScroll` : "headerIcon"}`}
            href="https://github.com/keyvannafar"
            target="_blank"
          >
            <i className="bi bi-github nav-link px-2 text-muted"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
