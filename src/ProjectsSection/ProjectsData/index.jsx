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
   const lightMode = useSelector((state) => state.LightMode.lightMode);
  return (
    <>
      <div className="container mb-2">
        <div
          className={`container ${
            lightMode == true
              ? "projectsSection"
              : "projectsSection projectsSectionLight"
          }`}
        >
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
          <div className="projectMobileSize text-center">
            <LazyLoad offset={0}>
              <img
                className="animate__animated animate__fadeInRightBig"
                src={image2}
              />
            </LazyLoad>
            <div className="urltextOnHover animate__animated animate__zoomIn">
              <div className="urltext">
                <a href={gitUrl} target="_blank">
                  {desText1 == "" ? (
                    ""
                  ) : (
                    <button className="p-1 projectsButton">
                      <i class="bi bi-github"></i> {desText1}
                    </button>
                  )}
                </a>
                <span>{desText2}</span>
                <span>
                  <a href={url} target="_blank">
                    {urltext == "" ? (
                      ""
                    ) : (
                      <button className="p-1 projectsButton">
                        <i class="bi bi-link-45deg"></i> {urltext}
                      </button>
                    )}
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
