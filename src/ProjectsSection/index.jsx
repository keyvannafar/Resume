import React from "react";
import { useSelector } from "react-redux";
import { dataProjects } from "./ProjectsData/dataProjects";
import ProjectsData from "./ProjectsData";
function Projects() {
  return (
    <>
      <div id="projects"></div>
      <div
        className={`projectSectionMain`}
      >
        <h2 className="text-center">Einige Projekte und Erfahrungen</h2>
        <div className="container projectsBox">
          {dataProjects.map((item) => (
            <ProjectsData key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
