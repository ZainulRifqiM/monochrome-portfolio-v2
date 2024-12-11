import {
  FaSquareInstagram,
  FaLinkedin,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="md:px-8 p-4  m-4 content-center   max-w-screen-xl w-full mx-auto   md:min-h-[10vh] md:space-y-8 space-y-4">
      <div className="flex flex-col md:flex-row text-center md:text-start justify-between border-t border-labelColor pt-4 md:space-y-0 space-y-2">
        <div>
          <p className=" text-labelColor ">
            &copy; 2024 | All rights reserved.
          </p>
        </div>
        <div className="flex gap-2 self-center md:self-start text-labelColor text-lg">
          <a
            href="https://www.linkedin.com/in/zainul-rifqi/"
            target="_blank"
            className="cursor-pointer hover:text-textColor"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/zrifqi_m/"
            target="_blank"
            className="cursor-pointer hover:text-textColor"
          >
            <FaSquareInstagram />
          </a>
          <a
            href="https://wa.me/6283817327542?text=Hi%20Rifqi,%20saya..."
            target="_blank"
            className="cursor-pointer hover:text-textColor"
          >
            <FaSquareWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
