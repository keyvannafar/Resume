import React from "react";
import { useSelector } from "react-redux";
import LazyLoad from "react-lazyload";
import "./../../ProjectsSection/projectsSection.css";
function ProjectsData({
  image1,
  image2,
  title,
  urltext,
  desText,
  desText1,
  desText2,
  gitUrl,
  url,
}) {
  return (
    <>
     
          <div className="projectLaptopSize text-center">
            <LazyLoad offset={0}>
              <img
                className="animate__animated animate__fadeInLeftBig"
                src={image1}
              />
            </LazyLoad>
            <span></span>
            <div className="urltextOnHover animate__animated animate__zoomIn">
              <h3 className="urltext text-700">{title}</h3>
            </div>
          </div>
          
    </>
  );
}

export default ProjectsData;
