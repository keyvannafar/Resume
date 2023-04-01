import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./backToTop.css";
function BackToTop() {
    const Scroll = useSelector((state) => state.OnScroll.Scroll);
  return Scroll == 1 ? (
    <a href="#home">
      <button className="top">
        <i class="bi bi-arrow-up"></i>
      </button>
    </a>
  ) : (
    ""
  );
}

export default BackToTop;
