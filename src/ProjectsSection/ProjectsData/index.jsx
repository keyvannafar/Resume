import React from "react";
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
  url
}) {
  return (
    <>
      <div className="container mb-2">
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
                  <a href={gitUrl}>
                    <i class="bi bi-github"></i>
                    {desText1}
                  </a>
                </span>
                <br />
                <span>{desText2}</span>
                <br />
                <span>
                  <a href={url}>
                    <i class="bi bi-link-45deg"></i>
                    {urltext}
                  </a>
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
