import { useLoaderData } from "react-router-dom";
import Button from "../../../../Components/Button";

const Intro = () => {
  const career = useLoaderData();

  return (
    <section className="flex flex-col items-center py-12 lg:py-20 px-6 font-poppins md:px-20 lg:px-6">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between  lg:w-10/12 xl:w-9/12">
        <div className="flex flex-col gap-3 w-full ">
          <h6 className="text-darkblue  text-base uppercase lg:text-sm">
            career at {career.company_name}
          </h6>

          <h1 className="text-darkblue font-semibold text-3xl  lg:text-4xl">
            {career.job_title}
          </h1>

          <p className="text-darkblue font-light text-base lg:text-sm lg:w-9/12 mb-5">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages.
          </p>

          <Button background="bg-royalblue" value="Apply Now" />
        </div>

        <div className="bg-verylightorange flex flex-col gap-2 py-8 px-10 lg:w-8/12">
          <h3 className="text-darkblue font-semibold text-lg lg:text-2xl mb-2">
            Job description
          </h3>
          <p className="text-black font-normal text-base">
            {career.job_type}, {career.location}
          </p>
          <p className="text-black font-light text-base capitalize">
            Salary: {career.salary}
          </p>
          <p className="text-black font-light text-base">{career.job_type}</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
