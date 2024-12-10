import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineCallMade } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    { link: "Home", path: "" },
    { link: "Skill", path: "skill" },
    { link: "Project", path: "project" },
    { link: "Contact", path: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="py-2 fixed w-full top-0 z-30 backdrop-blur-2xl bg-blackBg bg-opacity-80">
        <div className="max-w-screen-xl flex items-center justify-between md:px-8 p-4 mx-auto">
          <a href="">
            <div className="flex gap-2 items-center text-labelColor hover:text-textColor">
              <div className=" p-1 rounded-full border-2 border-labelColor hover:border-textColor">
                <MdOutlineMailOutline className="text-sm " />
              </div>
              <p className="font-normal text-sm">zainulrifqim@gmail.com</p>
            </div>
          </a>
          <div className="hidden md:flex space-x-4">
            <ul className="flex gap-4 items-center">
              {navItems.map(({ link, path }) => (
                <li key={link} className="mx-6">
                  <a
                    href={path}
                    className="font-normal text-sm text-labelColor relative cursor-pointer hover:text-textColor before:content-[''] before:w-8 before:h-1 before:bg-gradient-to-r from-textColor to-labelColor before:rounded-md before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition-all before:duration-300 before:ease-in-out hover:before:opacity-100 hover:before:w-full hover:before:translate-x-0"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <button
                className="py-1 px-2 bg-blackBg text-labelColor border-labelColor border rounded text-sm flex items-center gap-2 hover:text-blackBg hover:bg-gradient-to-r from-textColor to-labelColor "
                onClick={() => {}}
              >
                Hire Me
                <MdOutlineCallMade />
              </button>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-labelColor hover:text-textColor focus:outline-none items-center text-xl"
            >
              {isOpen ? <IoIosClose /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden fixed h-auto bg-blackBg bg-opacity-80 w-full pb-4">
            <ul className="px-12 space-y-2">
              {navItems.map(({ link, path }) => (
                <li key={link} className="">
                  <a
                    href={path}
                    className="font-normal text-sm text-labelColor relative cursor-pointer hover:text-textColor before:content-[''] before:w-8 before:h-1 before:bg-gradient-to-r from-textColor to-labelColor before:rounded-md before:absolute before:bottom-[-0.6rem] before:opacity-0 before:translate-x-[-1.5rem] before:transition-all before:duration-300 before:ease-in-out hover:before:opacity-100 hover:before:w-full hover:before:translate-x-0"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <button
                className="py-1 px-2 bg-blackBg text-labelColor border-labelColor border rounded text-sm flex items-center gap-2 hover:text-blackBg hover:bg-gradient-to-r from-textColor to-labelColor "
                onClick={() => {}}
              >
                Hire Me
                <MdOutlineCallMade />
              </button>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
