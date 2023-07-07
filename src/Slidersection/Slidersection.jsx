import Slidertext from "../Slidertext/Slidertext";
import "./Slidersection.css";
import { useSelector } from "react-redux";
import Slider from "../Slider/Slider";
function Slidersection() {
  return (
    <div className="slider-bg">
      <div
        className="d-flex slider-flexbox"
        id="slider"
      >
        <div className="slider-right">
          <Slider />
        </div>
        <div className="slider-left">
          <Slidertext />
        </div>
      </div>
    </div>
  );
}

export default Slidersection;
