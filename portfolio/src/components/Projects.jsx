import React from "react";
import Project from "./Project";
import projects from "../ProjectList";

const Projects = () => {
  return (
    <div className="p-4 sm:ml-80 md:ml-96  z-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        {projects.map((project, index) => (
          <Project key={index++} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
