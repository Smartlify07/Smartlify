const AwsSection = () => {
  return (
    <section className="bg-white px-6 py-10 md:py-20 md:px-20 lg:px-6 lg:py-0 lg:pb-10 flex flex-col items-center font-poppins">
      <div className="justify-between gap-10  flex flex-col lg:flex-row  lg:w-11/12 lg:items-center xl:w-10/12">
        <header className="flex flex-col gap-4">
          <h6 className="text-darkgray font-semibold text-lg lg:text-base ">
            {" "}
            AWS/Azure
          </h6>
          <h1 className="text-darkblue w-[90%] font-semibold text-2xl lg:text-3xl lg:w-[80%] xl:w-[70%]">
            We help you deploy, manage and secure your application on leading
            web services
          </h1>

          <p className="text-darkgray text-base md:text-lg lg:text-sm lg:w-[80%] ">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded. Through True
            Rich Attended does no end it his mother since real had half every.
          </p>
        </header>

        <div className="w-10/12">
          <img src="./images/Services/AWS.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AwsSection;
