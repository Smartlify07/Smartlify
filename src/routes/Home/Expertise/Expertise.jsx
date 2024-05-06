import ExpertiseRight from "./ExpertiseRight";

const Expertise = () => {
  return (
    <section className="bg-verylightblue py-20 font-poppins flex flex-col items-center">
      <div className="container flex items-center justify-around w-10/12">
        <div className="flex flex-col gap-4">
          <h6 className="text-black text-sm uppercase font-semibold">
            our expertise
          </h6>
          <h3 className="text-darkblue font-semibold text-4xl w-[70%]">
            We want to get local identification in every corner of the world in
            this era of global citizenship
          </h3>
          <p className="text-darkgray text-sm font-regular w-[70%]">
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
