import useIcons from "../../hooks/useIcons";

const HeaderRight = () => {
  const { FaTwitter, FaInstagram, FaLinkedin } = useIcons();
  return (
    <section className="flex flex-col gap-5 bg-lightroyalblue h-full py-16 px-20  lg:gap-5">
      <div className="flex flex-col gap-3">
        <p className="border-b border-b-darkgray py-2 text-sm text-lightgray">
          Location
        </p>
        <p className="text-white text-base">Ibeju-Lekki, Lagos. Nigeria</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="border-b border-b-darkgray py-2 text-sm text-lightgray">
          Working Hours
        </p>
        <p className="text-white  text-base">Monday To Friday</p>
        <p className="text-white text-base">9:00 AM to 8:00 PM </p>
        <p className="text-lightgray text-sm">
          Our Support Team is available 24Hrs
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="border-b border-b-darkgray py-2 text-sm text-lightgray">
          Contact us
        </p>
        <p className="text-white text-base">+2349066927835</p>
        <p className="text-lightgray text-sm">smartlify09@gmail.com</p>
      </div>

      <div className="flex items-center gap-6 text-white text-xl lg:text-lg mt-6">
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default HeaderRight;
