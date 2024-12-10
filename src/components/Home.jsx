import zae from "../assets/zae.png";
import { MdOutlineCallMade } from "react-icons/md";

const Home = () => {
  return (
    <div
      className="md:px-8 p-4 content-center max-w-screen-xl w-full mx-auto  h-screen "
      id="home"
    >
      <div className="mx-auto text-center space-y-8">
        <img src={zae} className="w-24 md:w-32 mx-auto" alt="" />
        <div className="space-y-2">
          <p className="text-sm font-normal text-labelColor">
            Hi, I&apos;m Rifqi
          </p>
          <div className="text-2xl md:text-4xl font-medium bg-gradient-to-r from-textColor to-labelColor inline-block text-transparent bg-clip-text">
            <p>Fresh Graduate,</p>
            <p>Front-end Developer, and</p>
            <p>UI Designer</p>
          </div>
        </div>
        <button
          className="mx-auto py-1 px-2 bg-blackBg text-labelColor border-labelColor border rounded text-sm flex items-center gap-2 hover:text-blackBg hover:bg-gradient-to-r from-textColor to-labelColor "
          onClick={() => {}}
        >
          Hire Me
          <MdOutlineCallMade />
        </button>
      </div>
    </div>
  );
};

export default Home;
