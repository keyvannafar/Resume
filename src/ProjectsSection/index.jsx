import React from "react";
import { dataProjects } from "./ProjectsData/dataProjects";
import ProjectsData from "./ProjectsData";
function Projects() {
  return dataProjects.map((item) => <ProjectsData key={item.id} {...item} />);
}

export default Projects;
