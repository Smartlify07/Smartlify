import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";

const Header = () => {
  return (
    <section className="py-20 px-6 flex flex-col items-center md:px-20 lg:px-6 font-poppins">
      <div className="lg:w-11/12 xl:w-10/12 flex gap-10  flex-col justify-between lg:gap-0 lg:flex-row">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </section>
  );
};

export default Header;
