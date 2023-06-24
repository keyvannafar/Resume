import React from "react";
import { useSelector } from "react-redux";
import { dataProjects } from "./ProjectsData/dataProjects";
import ProjectsData from "./ProjectsData";
function Projects() {
     const lightMode = useSelector((state) => state.LightMode.lightMode);
  return (
    <>
      <div id="projects"></div>
      <div
        className={`${
          lightMode == true
            ? "projectSectionMain"
            : "projectSectionMain projectSectionMainLight"
        }`}
      >
        <h2 className="text-center">Einige Projekte und Erfahrungen</h2>
        <div className="container">
          {dataProjects.map((item) => (
            <ProjectsData key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
