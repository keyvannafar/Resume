import React from "react";
import "./../../ProjectsSection/projectsSection.css";

function ProjectsData({ image1, image2, title, image3, image4, urltext }) {
  return (
    <>
      <div className="container mb-2">
        {/* <h3 className="projectsTitle">{title}</h3> */}
        <div className="container projectsSection">
          <div className="projectLaptopSize text-center">
            <img className="animate__animated animate__flipInY" src={image1} />
            <span></span>
            <div className="urltextOnHover animate__animated animate__fadeInLeft">
              <span className="urltext">{urltext}</span>
            </div>
            
          </div>

          <div className="projectMobileSize text-center">
            <img className="animate__animated animate__flipInY" src={image2} />
            <div className="urltextOnHover animate__animated animate__fadeInRight">
              <span className="urltext">{urltext}</span>
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
