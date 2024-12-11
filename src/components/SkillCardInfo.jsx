import PropTypes from "prop-types";

const SkillCardInfo = ({ heading, skills }) => {
  return (
    <div className="skills-info-card p-4 bg-[#161616] rounded-md border border-labelColor">
      <h4 className="text-base md:text-xl font-medium text-labelColor mb-8 border-b-2 border-labelColor">
        {heading}
      </h4>
      {skills.map((skill, index) => (
        <div key={index} className="skill-info mb-4">
          <div className="flex justify-between items-center">
            <span className="text-labelColor text-sm md:text-base font-medium">
              {skill.skill}
            </span>
            <span className="text-labelColor text-sm md:text-base font-medium">
              {skill.percentage}%
            </span>
          </div>
          <div className="skill-bar bg-disabledColor rounded-full h-2">
            <div
              className="skill-bar-fill bg-labelColor h-full rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Menambahkan validasi prop
SkillCardInfo.propTypes = {
  heading: PropTypes.string.isRequired, // heading harus berupa string dan wajib
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired, // skill harus berupa string dan wajib
      percentage: PropTypes.number.isRequired, // percentage harus berupa number dan wajib
    })
  ).isRequired, // skills harus berupa array dan wajib
};

export default SkillCardInfo;
