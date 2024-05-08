import { Link, NavLink, Outlet } from "react-router-dom";
import useIcons from "../hooks/useIcons";
import { useState } from "react";
const NavBarLayout = () => {
  const { FaArrowRightLong } = useIcons();
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="bg-darkblue flex flex-col items-center  py-6 md:py-6  font-poppins border-b border-b-gray-700">
        <div className=" w-11/12 flex justify-between md:justify-around  items-center relative xl:w-10/12 lg:w-11/12   ">
          <Link>
            <h1 className="text-white text-2xl font-bold">{"{Finsweet"}</h1>
          </Link>

          <ul
            className={`${
              !showNav && `hidden`
            } min-h-screen z-10 flex flex-col justify-around text-xl absolute top-[4rem] bg-darkblue w-[100vw]  right-[-0.9rem] md:flex  md:relative md:top-0 md:min-h-0 md:w-9/12 lg:w-8/12 md:left-0 md:justify-between md:flex-row items-center md:gap-3 lg:gap-7 text-gray-300 md:font-normal md:text-sm lg:font-semibold  lg:text-base`}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="services">Service</NavLink>
            </li>
            <li>
              <NavLink to="company">Company</NavLink>
            </li>
            <li>
              <NavLink to="career">Career</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact us</NavLink>
            </li>

            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>

            <li>
              <NavLink
                to="clone"
                className={"text-verylightorange flex gap-2 items-center"}
              >
                Clone project
                <FaArrowRightLong className="text-2xl" />
              </NavLink>
            </li>
          </ul>

          <div
            onClick={() => {
              setShowNav((prevState) => !prevState);
            }}
            className="    flex flex-col gap-2 items-center justify-center  w-10 h-10 md:hidden"
          >
            <div className="w-8 h-[2px] rounded-md bg-gray-100 "></div>
            <div className="w-8 h-[2px] rounded-md bg-gray-100"></div>
            <div className="w-8 h-[2px] rounded-md bg-gray-100"></div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBarLayout;
