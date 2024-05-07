import useIcons from "../../../hooks/useIcons";

const FooterBottom = () => {
  const { FaTwitter, FaInstagram, FaLightbulb, FaLinkedin } = useIcons();
  return (
    <footer className="bg-verylightorange py-5 px-6 flex flex-col items-center">
      <div className="flex flex-col gap-6 lg:flex-row lg:w-11/12 lg:justify-between xl:w-10/12 items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-dark font-semibold text-xl text-darkblue">
            Smartlify
          </h2>
          <FaLightbulb className="text-2xl text-yellow-200" />
        </div>

        <div className="flex items-center gap-7 text-darkblue">
          <FaTwitter className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaLinkedin className="text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
