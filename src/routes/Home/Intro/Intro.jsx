import Button from "../../../Components/Button/Button";
import useIcons from "../../../hooks/useIcons";
import Clients from "./Clients";
const Intro = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <>
      <section className="py-20 px-6 bg-darkblue font-poppins">
        <div className="container flex justify-around items-center  ">
          <div className="flex flex-col gap-5  w-5/12">
            <h3 className="text-white font-semibold text-5xl w-[90%] leading-tight">
              Transform Your Idea Into Reality with Finsweet
            </h3>
            <p className="text-blue-100 font-light text-base w-[90%]">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </p>

            <Button
              value="Request Quote"
              background="bg-royalblue"
              icon={<FaArrowRightLong className="text-xl" />}
            ></Button>
          </div>

          <div>
            <img
              src="./images/HeaderImage.png"
              alt=""
              className="h-[520px] object-contain"
            />
          </div>
        </div>

        <div className="container">
          <Clients />
        </div>
      </section>
    </>
  );
};

export default Intro;
