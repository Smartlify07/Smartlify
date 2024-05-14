import { Outlet } from "react-router-dom";
import CareerList from "../routes/Careers/CareerList/CareerList";
import Intro from "../routes/Careers/Intro/Intro";
import WorkCulture from "../routes/Careers/Work&Culture/WorkCulture";

const Careers = () => {
  return (
    <>
      <Outlet />

      <Intro />
      <CareerList />
      <WorkCulture />
    </>
  );
};

export default Careers;
