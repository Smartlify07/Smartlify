const ConsultSection = () => {
  return (
    <section className="bg-verylightblue px-6 pb-10 md:px-20 lg:px-6 flex flex-col items-center font-poppins">
      <div className="flex flex-col  gap-20  justify-between lg:w-11/12 lg:items-center lg:flex-row xl:w-10/12 ">
        <div className="lg:w-6/12">
          <img
            src="./images/Services/Consult.svg"
            className="object-contain"
            alt="consult"
          />
        </div>

        <header className="flex flex-col gap-3 lg:w-9/12  ">
          <h6 className="text-black font-semibold text-lg md:text-xl lg:text-lg">
            Consulting
          </h6>

          <h1 className="text-darkblue font-semibold text-2xl lg:text-3xl lg:w-9/12 lg:leading-10">
            Get advice from world class professionals
          </h1>

          <p className="text-darkgray font-light text-base md:text-lg lg:text-sm ">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded. Through True
            Rich Attended does no end it his mother since real had half every.
          </p>
        </header>
      </div>
    </section>
  );
};

export default ConsultSection;
