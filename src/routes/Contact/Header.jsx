import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <section className="py-20 px-6 flex flex-col items-center md:px-20  lg:px-6 font-poppins">
      <div className="flex flex-col gap-5 md:w-full  md:gap-16  lg:flex-row lg:justify-around  lg:w-11/12 xl:w-10/12">
        <HeaderLeft />
        <HeaderRight />
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.564177923277!2d3.740476873503666!3d6.449955624016693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10395589214c88dd%3A0x403f90ed35a8c82d!2sLakowe%20Lakes%20Estate%20Golf%20Course!5e0!3m2!1sen!2sng!4v1715642811483!5m2!1sen!2sng"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-11/12 lg:w-11/12 xl:w-10/12 mt-10"
        defaultChecked
        contentEditable={false}
      ></iframe>
    </section>
  );
};

export default Header;
