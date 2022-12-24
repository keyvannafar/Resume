//import './App.css';
//import Header from "Header.js"
import "./Footer.css"
import React from 'react';
import { NavData } from '../Navbar/dataNavbar/DataNav';
import { NavDataEnglisch } from '../Navbar/dataNavbar/DataNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarText from '../Navbar/dataNavbar';
import { useSelector } from 'react-redux';
function Footer() {
  const Language = useSelector((state)=> state.LanChange.Language)
  return (
    <footer className="py-3 my-4 bg-black footer mt-0">
      <ul className="nav justify-content-center  pb-3 mb-3 footerNav">
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

        {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li> */}
        {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li> */}
      </ul>

      <p className="text-center text-muted">&copy; 2022, M.M.Nafarzadeh</p>
    </footer>
  );
}

export default Footer;