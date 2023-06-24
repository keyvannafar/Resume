import Contact from "../../Contact";
import "./Footer.css";
import React from "react";
import { NavData } from "../Navbar/dataNavbar/DataNav";
import { NavDataEnglisch } from "../Navbar/dataNavbar/DataNav";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarText from "../Navbar/dataNavbar";
import { useSelector } from "react-redux";
function Footer() {
  const Language = useSelector((state) => state.LanChange.Language);
  const lightMode = useSelector((state) => state.LightMode.lightMode);
  return (
    <footer
      className={`py-3 my-4 footer ${
        lightMode == true ? "bg-black" : "bg-white"
      }`}
      id="Contact"
    >
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-1 mb-3">
              <h5>Links</h5>
              <ul className="nav flex-column">
                <ul
                  className={`nav footer-Nav ${
                    lightMode == false ? "footerNavLight" : ""
                  }`}
                >
                  {Language == false
                    ? NavData.map((item) => (
                        <>
                          <li className=" mb-2 w-100">
                            <NavbarText key={item.id} {...item} />
                          </li>
                        </>
                      ))
                    : NavDataEnglisch.map((item) => (
                        <>
                          <li className=" mb-2 w-100">
                            <NavbarText key={item.id} {...item} />
                          </li>
                        </>
                      ))}
                </ul>
                <br />
              </ul>
            </div>

            <div className="col-1 col-md-1 mb-3"></div>

            <div className="col-6 col-md-3 mb-3">
              <h5>Adress </h5>
              <ul
                className={` flex-column ${
                  lightMode == true ? "nav" : "nav navLight"
                }`}
              >
                <li className="nav-item mb-2">
                  <span>
                    <i className="bi bi-geo-alt"></i> Frankfurt am Main
                  </span>
                </li>
                <li className="nav-item mb-2">
                  <span>60598 ,DE</span>
                </li>
                <li className="nav-item mb-2">
                  <span>
                    <i className="bi bi-phone-vibrate"></i> +49 178 712 3740
                  </span>
                </li>
                <li className="nav-item mb-2">
                  <span>
                    <i className="bi bi-whatsapp"></i> +98 913 104 2684
                  </span>
                </li>
                <li className="nav-item mb-2">
                  <span>
                    <i className="bi bi-envelope"></i>{" "}
                    Kayvannafarzadeh@yahoo.com
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-md-6 offset-md-1 mb-3 p-0">
              <Contact />
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="copyright">
              © 2022, All rights reserved, M.M.Nafarzadeh
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="link-dark"
                  href="https://github.com/keyvannafar"
                  target="_blank"
                >
                  <i className="bi bi-github"></i>
                </a>
              </li>

              <li className="ms-3">
                <a
                  className="link-dark"
                  href="https://www.linkedin.com/in/mohammad-mehdi-nafarzadeh-028917240/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-dark" href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </footer>
  );
}

export default Footer;
