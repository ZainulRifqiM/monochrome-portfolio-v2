import { BiSolidPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <div className="md:px-8 p-4  m-4 content-center   max-w-screen-xl w-full mx-auto  md:min-h-[60vh] h-[32vh] md:space-y-8 space-y-4">
      <div className="text-center md:space-y-2">
        <h1 className=" text-xl md:text-4xl font-medium bg-gradient-to-r from-textColor to-labelColor inline-block text-transparent bg-clip-text">
          Interested in collaborating?
        </h1>
        <p className="md:text-base text-sm text-labelColor   ">
          I’d be thrilled to hear about your project!
        </p>
      </div>
      <button
        className="mx-auto md:py-2 md:px-4 py-1 px-2 bg-labelColor text-blackBg border-textColor border rounded md:text-lg text-sm flex items-center gap-2 hover:text-blackBg hover:bg-gradient-to-r from-textColor to-labelColor "
        onClick={() => {
          window.open("https://wa.me/6283817327542", "_blank");
        }}
      >
        <BiSolidPhoneCall />
        Let&apos;s Talk
      </button>
    </div>
  );
};

export default Contact;
