import PropTypes from "prop-types";

const SkillCard = ({ title, icon, isActive, onClick }) => {
  return (
    <div
      className={`${
        isActive ? "bg-labelColor border-textColor text-blackBg" : ""
      }  border border-labelColor flex basis-1/3 rounded-md md:p-10 p-4 text-labelColor justify-center relative bg-[#161616]   cursor-pointer transition-all duration-300 ease-in-out hover:bg-labelColor hover:text-blackBg`}
      onClick={() => onClick()}
    >
      <div
        className={`${
          isActive
            ? "flex bg-labelColor border-textColor text-blackBg "
            : "hidden"
        } md:w-16 md:h-16 w-6 h-6 absolute rounded-md md:top-[-0.5rem] md:left-[-0.5rem] top-[-0.2rem] left-[-0.2rem] border  border-labelColor  bg-labelColor text-labelColor`}
      >
        <img src={icon} alt={title} />
      </div>
      <span className="md:text-base text-xs">{title}</span>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired, // title harus berupa string dan wajib
  icon: PropTypes.string.isRequired, // icon harus berupa string dan wajib (URL gambar)
  isActive: PropTypes.bool, // isActive bersifat opsional dan harus berupa boolean
  onClick: PropTypes.func.isRequired, // onClick harus berupa fungsi dan wajib
};

export default SkillCard;
