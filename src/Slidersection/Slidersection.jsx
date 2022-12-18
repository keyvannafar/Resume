import Slidertext from "../Slidertext/Slidertext"
import "./Slidersection.css"
import Slider from "../Slider/Slider"
function Slidersection(){
    return(
        <div className="d-flex slider-flexbox " id="slider">
            <div className="slider-left">
              <Slidertext />
            </div>
            <div className="slider-right">
              <Slider />
            </div>
        </div>
    )
}

export default Slidersection;