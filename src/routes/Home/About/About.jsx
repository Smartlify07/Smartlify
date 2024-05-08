import { NavLink } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import Numbers from "./Numbers";
import useIcons from "../../../hooks/useIcons";
const About = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <>
      <section className=" py-20 px-6 flex flex-col items-center font-poppins">
        <div className=" lg:w-11/12 xl:w-10/12 flex flex-col">
          <div className="flex flex-col justify-around gap-5 items-center  ">
            <div className="flex flex-col">
              <h6 className="text-darkblue text-base font-semibold self-start  mb-4">
                ABOUT US
              </h6>
              <h1 className="text-darkblue text-3xl leading-[2.3rem] lg:text-4xl  lg:w-[70%] xl:w-[50%] font-bold lg:leading-[1.75rem]">
                The company leads entire webdesign process from concept to
                delivery.
              </h1>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-darkblue text-2xl lg:text-3xl font-bold lg:mt-5">
                The Era Of Technology.
              </h1>
              <p className="text-sm lg:text-base font-regular text-darkgray lg:w-[60%]">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </div>
          </div>

          <ImageGrid />
          <div className="flex flex-col justify-between items-center w-full self-center px-5 mt-6 lg:flex-row">
            <Numbers />
            <NavLink
              to="/company"
              className={
                "text-blue-500 mt-7 flex items-center gap-2 font-poppins lg:mt-0 "
              }
            >
              Read about us
              <FaArrowRightLong className="text-darkblue  text-2xl" />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
