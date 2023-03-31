import Slidertext from "../Slidertext/Slidertext"
import "./Slidersection.css"
import Slider from "../Slider/Slider"
function Slidersection(){
  // window.onscroll = function () {
  //   scrollFunction();
  // };
  // let mybutton = document.getElementById("btn-back-to-top");
  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }
    return (
      <div className="slider-bg">
        {/* <button className="backToTop" id="btn-back-to-top">
         
            <i class="bi bi-arrow-up"></i>
         
        </button> */}
        <div className="d-flex slider-flexbox " id="slider">
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