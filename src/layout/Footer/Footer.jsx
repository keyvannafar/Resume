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
  return (
    <footer className="py-3 my-4 bg-black footer">
      {/* <ul className="nav justify-content-center  pb-3 mb-3 footerNav">
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/mohammad-mehdi-nafarzadeh-028917240/">
            <i class="bi bi-linkedin nav-link px-2 text-muted"></i>
          </a>
        </li>
        <li className="nav-item">
          <i class="bi bi-github nav-link px-2 text-muted"></i>
        </li>
      </ul>
      <ul className="nav justify-content-center border-bottom  pb-3 mb-3 footerNav">
        {Language == false
          ? NavData.map((item) => <NavbarText key={item.id} {...item} />)
          : NavDataEnglisch.map((item) => (
              <NavbarText key={item.id} {...item} />
            ))}
      </ul>

      <p className="text-center text-muted">&copy; 2022, M.M.Nafarzadeh</p> */}
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-1 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
                <ul className="nav footer-Nav">
                  {Language == false
                    ? NavData.map((item) => (
                        <li class="nav-item mb-2">
                          <NavbarText key={item.id} {...item} />
                        </li>
                      ))
                    : NavDataEnglisch.map((item) => (
                        <NavbarText key={item.id} {...item} />
                      ))}
                </ul>
              </ul>
            </div>

            <div class="col-6 col-md-1 mb-3">
              {/* <h5>Section</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul> */}
            </div>

            <div class="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul class="nav flex-column">
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

            <div class="col-md-7 offset-md-1 mb-3">
              <Contact />
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="copyright">
              © 2022, All rights reserved, M.M.Nafarzadeh
            </p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-dark" href="https://github.com/keyvannafar">
                  <i class="bi bi-github"></i>
                </a>
              </li>

              <li class="ms-3">
                <a
                  class="link-dark"
                  href="https://www.linkedin.com/in/mohammad-mehdi-nafarzadeh-028917240/"
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
