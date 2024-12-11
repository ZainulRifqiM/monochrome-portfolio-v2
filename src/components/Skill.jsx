import { Datasets } from "../utils/DataSkill";
import SkillCard from "./SkillCard";
import { useState } from "react";
import SkillCardInfo from "./SkillCardInfo";

const Skill = () => {
  const [selectedSkill, setSelectedSkill] = useState(Datasets[0]);

  const handleClick = (data) => {
    setSelectedSkill(data);
  };

  return (
    <div className="md:px-8 p-4  m-4 mb-12   max-w-screen-xl w-full mx-auto  h-full space-y-8">
      {/* <div className="border border-labelColor md:p-8 p-2 rounded-md space-y-8"> */}
      <div className="text-center">
        <h1 className=" text-lg md:text-2xl font-medium bg-gradient-to-r from-textColor to-labelColor inline-block text-transparent bg-clip-text">
          Technical Proficiency
        </h1>
      </div>

      <div className="flex flex-col gap-4 md:mt-12 mt-4">
        <div className=" flex  gap-2 md:gap-4 w-full ">
          {Datasets.map((data) => (
            <SkillCard
              key={data.id}
              title={data.title}
              icon={data.icon}
              isActive={selectedSkill.id === data.id}
              onClick={() => handleClick(data)}
            />
          ))}
        </div>
        <div className="   ">
          <SkillCardInfo
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Skill;
