import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
