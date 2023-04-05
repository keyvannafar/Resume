import Slidertext from "../Slidertext/Slidertext"
import "./Slidersection.css"
import { useSelector } from "react-redux";
import Slider from "../Slider/Slider"
function Slidersection(){
  const lightMode = useSelector((state) => state.LightMode.lightMode);
    return (
      <div className="slider-bg">
        <div
          className={`d-flex ${
            lightMode == true ? "slider-flexbox" : "slider-flexbox bg-white"
          }`}
          id="slider"
        >
          <div className="slider-left">
            <Slidertext />
          </div>
          <div className="slider-right">
            <Slider />
          </div>
        </div>
      </div>
    );
}

export default Slidersection;