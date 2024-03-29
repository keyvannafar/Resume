import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./Home/Home";
import LoginForm from "./LoginForm/index.jsx";
import Navbar from "./layout/Navbar"
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import BackToTop from "./BackToTop";
import "animate.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./layout/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<LoginForm />} />
            </Routes>
            <Footer />
            <BackToTop />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
