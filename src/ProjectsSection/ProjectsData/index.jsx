import React from "react";
import "./../../ProjectsSection/projectsSection.css";
import LazyLoad from "react-lazy-load";
function ProjectsData({ image1, image2, title, image3, image4, urltext, desText, desText1, desText2 }) {
  return (
    <>
      <div className=" mb-2 ">
        <div className=" container projectsSection">
          <div className="projectLaptopSize text-center">
            <LazyLoad threshold={0.95} offset={-150}>
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
            <LazyLoad threshold={0.95} offset={-150}>
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
      </div>
    </>
  );
}

export default ProjectsData;
