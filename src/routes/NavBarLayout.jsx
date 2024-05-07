import { Link, NavLink, Outlet } from "react-router-dom";
import useIcons from "../hooks/useIcons";
const NavBarLayout = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <>
      <nav className="bg-darkblue flex flex-col items-center  py-6 md:py-6  font-poppins">
        <div className="   w-11/12  flex justify-between md:justify-around lg:w-full  items-center ">
          <Link>
            <h1 className="text-white text-2xl font-bold">{"{Finsweet"}</h1>
          </Link>

          <ul className="hidden md:flex items-center md:gap-3 lg:gap-7 text-gray-300 md:font-normal md:text-sm lg:font-semibold  lg:text-base">
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

          <div className=" rounded-md  flex flex-col gap-2 items-center justify-center  w-10 h-10 md:hidden">
            <div className="w-8 h-1 rounded-md bg-gray-100 "></div>
            <div className="w-8 h-1 rounded-md bg-gray-100"></div>
            <div className="w-8 h-1 rounded-md bg-gray-100"></div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBarLayout;