import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition duration-300 ease-in-out filter grayscale hover:grayscale-0"
    >
      <div className="border border-labelColor max-w-sm rounded shadow-lg transition duration-300 ease-in-out cursor-pointer bg-color1 md:p-4 p-2 hover:-translate-y-2 h-full">
        <div className="h-52">
          <img
            className="w-full h-full object-fill rounded "
            src={project.img}
            alt={project.title}
          />
        </div>
        <div className="px-2 py-2 text-color7 text-base flex items-center justify-between space-x-2">
          <div>
            <p className="md:text-sm text-xs text-disabledColor">
              {project.title}
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            {project.tools.map((tool, index) => (
              <img
                key={index}
                src={tool.icon}
                alt={tool.name}
                className="w-fit h-fit"
              />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

// Validasi props
ProjectCard.propTypes = {
  project: PropTypes.shape({
    url: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ProjectCard;
