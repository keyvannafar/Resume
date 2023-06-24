import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./backToTop.css";
function BackToTop() {
    const Scroll = useSelector((state) => state.OnScroll.Scroll);
  return Scroll == 1 ? (
    <a href="#home">
      <button className="top">
        <i className="bi bi-arrow-up text-center"></i>
      </button>
    </a>
  ) : (
    ""
  );
}

export default BackToTop;
