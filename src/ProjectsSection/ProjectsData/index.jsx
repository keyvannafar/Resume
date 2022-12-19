import React from "react";
import "./../../ProjectsSection/projectsSection.css";
function ProjectsData({ image1, image2, title, image3, image4, urltext }) {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <div className="container projectsSection">
          <div className="projectLaptopSize text-center">
            <img src={image1} />
            <div className="urltextOnHover">
              <span>{urltext}</span>
            </div>
          </div>

          <div className="projectMobileSize text-center">
            <img src={image2} />
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
