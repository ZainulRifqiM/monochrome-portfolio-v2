import { Datasets } from "../utils/data";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div className="md:px-8 p-4   max-w-screen-xl w-full mx-auto  h-full ">
      <h1 className="text-textColor">Technical Proficiency</h1>
      <div className="skills-content flex flex-col md:flex-row  gap-4 md:mt-12 mt-4">
        <div className="skills md:w-1/4  flex md:flex-col flex-row gap-2  md:gap-8 ">
          {Datasets.map((data) => (
            <SkillCard key={data.id} title={data.title} icon={data.icon} />
          ))}
        </div>
        <div className="skills-info md:w-3/4 bg-gray-700  md:h-screen ">
          Ini Bagian Penjelasan Skill
        </div>
      </div>
    </div>
  );
};

export default Skill;
