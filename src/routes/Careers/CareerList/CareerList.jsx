import { Link } from "react-router-dom";
import { careers } from "../../../data/careers.json";
import useIcons from "../../../hooks/useIcons";

const CareerList = () => {
  return (
    <section className="flex flex-col items-center py-12 md:px-20 lg:px-6 font-poppins ">
      <div className=" bg-verylightblue w-full px-6 py-7 grid grid-cols-1 lg:grid-cols-3  gap-6  justify-items-center  lg:w-11/12 xl:w-10/12">
        {careers.map((career) => (
          <CareerBox key={career.id} {...career} />
        ))}
      </div>
    </section>
  );
};

const CareerBox = (props) => {
  const { HiOutlineArrowLongRight } = useIcons();

  return (
    <div className="bg-white w-full font-poppins px-10 py-12 rounded-sm flex flex-col  gap-10 lg:w-full">
      <header className="flex flex-col gap-3">
        <h4 className="text-xl font-semibold text-darkblue  lg:text-lg">
          {props.job_title}
        </h4>

        <div className="flex flex-col gap-1">
          <p className="text-darkgray  text-base md:text-lg lg:text-base">
            {props.location}
          </p>
          <p className="text-darkgray text-base md:text-lg lg:text-base">
            {props.job_type}
          </p>
        </div>
      </header>

      <Link
        to={props.id.toString() + "/details"}
        className="flex gap-3 items-center font-semibold text-royalblue text-lg lg:text-base"
      >
        Apply now <HiOutlineArrowLongRight className="text-darkblue text-3xl" />{" "}
      </Link>
    </div>
  );
};

export default CareerList;
