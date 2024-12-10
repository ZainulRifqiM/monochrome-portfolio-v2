import React from "react";

const SkillCardInfo = ({ heading, skills }) => {
  console.log(skills);
  return (
    <div className="skills-info-card p-4 bg-[#161616] rounded-md">
      <h4 className="text-base md:text-xl font-medium text-labelColor mb-4">
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
              className="skill-bar-fill bg-labelColor h-full rounded-full"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCardInfo;
