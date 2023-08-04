import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
        <div className="urltextOnHover animate__animated animate__zoomIn p-2">
          {" "}
          <a href={url}>
            <div className="d-flex">
              <i class="bi bi-link-45deg urltext"></i>&nbsp;{" "}
              <h3 className="urltext">{title}</h3>
            </div>{" "}
          </a>
          <a href={gitUrl}>
            <div className="d-flex">
              <i class="bi bi-github urltext"></i>&nbsp;
              <h3 className="urltext">Github</h3>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectsData;
