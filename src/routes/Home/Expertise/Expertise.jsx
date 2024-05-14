import ExpertiseRight from "./ExpertiseRight";

const Expertise = () => {
  return (
    <section className="bg-verylightblue py-20 px-6 md:px-20 lg:px-6 font-poppins flex flex-col items-center">
      <div className="flex flex-col lg:items-center w-full lg:flex-row lg:w-11/12 xl:w-10/12">
        <div className="flex flex-col gap-4">
          <h6 className="text-black  text-sm uppercase md:text-lg lg:text-base font-semibold">
            our expertise
          </h6>
          <h3 className="text-darkblue font-semibold text-3xl lg:text-4xl  lg:w-[90%]">
            We want to get local identification in every corner of the world in
            this era of global citizenship
          </h3>
          <p className="text-darkgray text-sm font-regular md:text-base lg:w-[70%]">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </div>

        <ExpertiseRight />
      </div>
    </section>
  );
};

export default Expertise;
