const SkillCard = ({ title, icon, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${
        isActive ? "active" : ""
      }  border border-labelColor flex basis-1/3 md:basis-0 rounded-md md:p-10 p-4 text-labelColor justify-center relative bg-[#161616]   cursor-pointer transition-all duration-300 ease-in-out hover:bg-labelColor hover:text-blackBg`}
      onClick={() => onClick()}
    >
      <div className="md:w-16 md:h-16 w-6 h-6 absolute md:top-[-0.5rem] md:left-[-0.5rem] top-[-0.2rem] left-[-0.2rem] border border-labelColor rounded-md bg-labelColor text-labelColor ">
        <img src={icon} alt={title} />
      </div>
      <span className="md:text-base text-xs">{title}</span>
    </div>
  );
};

export default SkillCard;
