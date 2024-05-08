import ProcessBoxes from "./ProcessBoxes";

const ProcessSection = (props) => {
  return (
    <section
      className={`${props.background} font-poppins py-20 px-6 flex flex-col items-center`}
    >
      <div className="lg:w-11/12 xl:w-10/12 ">
        <header className="flex justify-between items-start">
          <div className="flex flex-col gap-4">
            <h6 className="text-darkblue font-semibold uppercase text-sm ">
              Our Process
            </h6>

            <h1 className="text-4xl  lg:w-[60%] font-semibold text-darkblue leading-tight ">
              The process we are working With Our client Worldwide
            </h1>

            <p className="text-darkblue text-base font-light lg:w-[60%]">
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable.
            </p>
          </div>

          <img src="./images/Shapes.svg" alt="" />
        </header>

        <ProcessBoxes />
      </div>
    </section>
  );
};

export default ProcessSection;
