
import slide2 from "../images/slides/slide2.jpg";
import Reactlogo from "../images/slides/Reactlogo.jpg";
import "./Slider.css"
function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide slider-main"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        
      </div>
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <img src={slide2} class="d-block slider-image" alt="slider-image" />
          
      </div>
      </div>
    </div>
  );
}

export default Slider;
