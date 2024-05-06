import { NavLink } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import Numbers from "./Numbers";
import useIcons from "../../../hooks/useIcons";
const About = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <>
      <section className=" py-20 px-6 font-poppins">
        <div className="container flex flex-col">
          <div className="flex justify-around gap-5  self-center w-11/12  items-center px-5">
            <div className="flex flex-col">
              <h6 className="text-darkblue text-sm font-semibold self-start  mb-4">
                ABOUT US
              </h6>
              <h1 className="text-darkblue text-4xl font-bold leading-[2.5rem]">
                The company leads entire webdesign process from concept to
                delivery.
              </h1>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="text-darkblue text-3xl font-bold">
                The Era Of Technology.
              </h1>
              <p className="text-sm font-regular text-darkgray">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </div>
          </div>

          <ImageGrid />
          <div className="flex justify-between items-center w-11/12 self-center px-5 mt-6">
            <Numbers />
            <NavLink
              to="/company"
              className={"text-blue-500 flex items-center gap-2 font-poppins"}
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
