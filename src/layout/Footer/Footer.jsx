//import './App.css';
//import Header from "Header.js"
import Contact from "../../Contact";
import "./Footer.css";
import React from "react";
import { NavData } from "../Navbar/dataNavbar/DataNav";
import { NavDataEnglisch } from "../Navbar/dataNavbar/DataNav";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarText from "../Navbar/dataNavbar";
import { formDataDeutsch } from "../../Contact/ContactFormData/contactData";
import { formDataEnglish } from "../../Contact/ContactFormData/contactData";
import FormContact from "../../Contact/ContactFormData";
import { useSelector } from "react-redux";
function Footer() {
  const Language = useSelector((state) => state.LanChange.Language);
  const lightMode = useSelector((state) => state.LightMode.lightMode);
  return (
    <footer
      className={`py-3 my-4 footer ${
        lightMode == true ? "bg-black" : "bg-white"
      }`}
    >
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-1 mb-3">
              <h5>Links</h5>
              <ul class="nav flex-column">
                <ul
                  className={`nav footer-Nav ${
                    lightMode == false ? "footerNavLight" : ""
                  }`}
                >
                  {Language == false
                    ? NavData.map((item) => (
                        <>
                          <li class=" mb-2 w-100">
                            <NavbarText key={item.id} {...item} />
                          </li>
                        </>
                      ))
                    : NavDataEnglisch.map((item) => (
                        <NavbarText key={item.id} {...item} />
                      ))}
                </ul>
                <br />
              </ul>
            </div>

            <div class="col-1 col-md-1 mb-3"></div>

            <div class="col-6 col-md-3 mb-3">
              <h5>Adress </h5>
              <ul
                class={` flex-column ${
                  lightMode == true ? "nav" : "nav navLight"
                }`}
              >
                <li class="nav-item mb-2">
                  <span>
                    <i class="bi bi-geo-alt"></i> Frankfurt am Main
                  </span>
                </li>
                <li class="nav-item mb-2">
                  <span>60598 ,DE</span>
                </li>
                <li class="nav-item mb-2">
                  <span>
                    <i class="bi bi-phone-vibrate"></i> +49 178 712 3740
                  </span>
                </li>
                <li class="nav-item mb-2">
                  <span>
                    <i class="bi bi-whatsapp"></i> +98 913 104 2684
                  </span>
                </li>
                <li class="nav-item mb-2">
                  <span>
                    <i class="bi bi-envelope"></i> Kayvannafarzadeh@yahoo.com
                  </span>
                </li>
              </ul>
            </div>

            <div class="col-md-6 offset-md-1 mb-3">
              <Contact />
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="copyright">
              © 2022, All rights reserved, M.M.Nafarzadeh
            </p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a
                  class="link-dark"
                  href="https://github.com/keyvannafar"
                  target="_blank"
                >
                  <i class="bi bi-github"></i>
                </a>
              </li>

              <li class="ms-3">
                <a
                  class="link-dark"
                  href="https://www.linkedin.com/in/mohammad-mehdi-nafarzadeh-028917240/"
                  target="_blank"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-dark" href="#">
                  <i class="bi bi-instagram"></i>
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
