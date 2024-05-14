import { NavLink, Outlet } from "react-router-dom";
import ApplySection from "../ApplySection/ApplySection";

const styleActiveTab = ({ isActive }) =>
  isActive && "border-b-2 border-b-royalblue";

const Tabs = () => {
  return (
    <section className="section lg:py-12 px-6  flex flex-col items-center font-poppins md:px-20 lg:px-6">
      <div className="bg-verylightblue py-5 flex flex-col  gap-8 items-center   lg:w-10/12 xl:w-9/12">
        <div className="flex pt-5 items-center justify-center font-bold border-b-2 border-b-lighterblue w-full">
          <div className=" text-base flex gap-5 justify-center md:w-10/12  md:justify-between lg:w-7/12   lg:text-lg">
            <NavLink className={styleActiveTab} to={"details"}>
              Details
            </NavLink>
            <NavLink className={styleActiveTab} to={"requirements"}>
              Requirements
            </NavLink>
            <NavLink className={styleActiveTab} to={"responsibilities"}>
              Responsibilities
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
      <ApplySection />
    </section>
  );
};

export default Tabs;
