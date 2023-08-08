import React from "react";
import { useSelector } from "react-redux";
import { dataProjects } from "./ProjectsData/dataProjects";
import ProjectsData from "./ProjectsData";
function Projects() {
   const Language = useSelector((state) => state.LanChange.Language);
  return (
    <>
      <div id="projects"></div>
      <div className={`projectSectionMain`}>
        <h2 className="col text-center">
          {Language == false ? (
            <span>Einige Projekte und Erfahrungen</span>
          ) : (
            <span>Some projects and experiences</span>
          )}
        </h2>
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
