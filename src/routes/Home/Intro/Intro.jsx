import Button from "../../../Components/Button";
import useIcons from "../../../hooks/useIcons";
import Clients from "./Clients";
const Intro = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <>
      <section className="py-20 px-6 bg-darkblue font-poppins md:px-20 lg:px-6 md:flex md:flex-col items-center">
        <div className="flex flex-col items-center lg:flex-row lg:w-11/12 xl:w-10/12 lg:justify-around">
          <div className=" flex flex-col gap-5 md:gap-6 lg:w-5/12">
            <h3 className="text-white leading-snug font-semibold text-2xl md:text-5xl w-[100%] lg:leading-tight">
              Transform Your Idea Into Reality with Finsweet
            </h3>
            <p className="text-blue-100 font-light text-base md:text-lg w-[90%]">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>

            <Button
              value="Request Quote"
              background="bg-royalblue"
              icon={<FaArrowRightLong className="text-xl" />}
            ></Button>
          </div>

          <div className="hidden lg:block">
            <img
              src="./images/HeaderImage.png"
              alt=""
              className="h-[520px] object-contain"
            />
          </div>
        </div>

        <div className="container flex items-center justify-center">
          <Clients />
        </div>
      </section>
    </>
  );
};

export default Intro;
