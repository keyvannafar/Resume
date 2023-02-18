import React from "react";
import LazyLoad from "react-lazyload";
import "./../../ProjectsSection/projectsSection.css";

function ProjectsData({ image1, image2, title, image3, image4, urltext, desText, desText1, desText2 }) {
  return (
    <>
      <div className="container mb-2">
        {/* <h3 className="projectsTitle">{title}</h3> */}
        <div className="container projectsSection">
          <div className="projectLaptopSize text-center">
            <LazyLoad offset={-150}>
              <img
                className="animate__animated animate__flipInY"
                src={image1}
              />
            </LazyLoad>
            <span></span>
            <div className="urltextOnHover animate__animated animate__zoomIn">
              <h3 className="urltext text-700">{title}</h3>
            </div>
          </div>

          <div className="projectMobileSize text-center">
            <LazyLoad offset={-150}>
              <img
                className="animate__animated animate__flipInY"
                src={image2}
              />
            </LazyLoad>
            <div className="urltextOnHover animate__animated animate__zoomIn">
              <div className="urltext">
                <span>{desText}</span>
                <br />
                <span>
                  <i class="bi bi-github"></i>
                  {desText1}
                </span>
                <br />
                <span>{desText2}</span>
                <br />
                <span>
                  <i class="bi bi-link-45deg"></i>
                  {urltext}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container projectsSection">
          <div className="projectLaptopSize text-center">
            <img src={image3} />
          </div>
          <div className="projectMobileSize text-center">
            <img src={image4} />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ProjectsData;
