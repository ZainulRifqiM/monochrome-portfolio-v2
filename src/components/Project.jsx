import { DataProjects } from "../utils/DataProject";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div
      className="md:px-8 p-4  m-4 content-center  max-w-screen-xl w-full mx-auto  md:min-h-[80vh] space-y-8"
      id="project"
    >
      <div className="text-center">
        <h1 className=" text-lg md:text-2xl font-medium bg-gradient-to-r from-textColor to-labelColor inline-block text-transparent bg-clip-text">
          Here are all my projects
        </h1>
        <p className="text-sm text-labelColor   ">
          Showcasing front-end websites, UI designs, and other creative works.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DataProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
