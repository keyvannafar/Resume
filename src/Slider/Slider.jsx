
import slide2 from "../images/slides/slide6new.png";
import "./Slider.css"
function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide slider-main"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item active">
          <img src={slide2} className="d-block slider-image" alt="slider-image" />         
      </div>
      </div>
    </div>
  );
}

export default Slider;
