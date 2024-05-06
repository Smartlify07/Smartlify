import { NavLink, Outlet } from "react-router-dom";
import useIcons from "../hooks/useIcons";
const NavBarLayout = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <>
      <nav className="bg-darkblue border-b border-b-gray-300 py-4 px-5 font-poppins">
        <div className="container flex justify-around items-center">
          <NavLink>
            <h1 className="text-white text-2xl font-bold">{"{Finsweet"}</h1>
          </NavLink>

          <ul className="flex gap-7 text-gray-300 font-semibold  text-base">
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
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBarLayout;
