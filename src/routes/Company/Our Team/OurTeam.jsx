const OurTeam = () => {
  return (
    <section className="py-10 px-6 flex flex-col items-center font-poppins lg:py-0 lg:pb-0  ">
      <div className="lg:w-11/12 xl:w-10/12 flex flex-col gap-4">
        <header className="flex flex-col gap-3">
          <h6 className="text-darkblue uppercase  text-lg lg:text-sm">
            meet our team
          </h6>
          <h1 className="text-darkblue font-semibold leading-9 text-3xl lg:w-5/12 xl:w-4/12">
            Teamwork is the only way we work
          </h1>

          <p className="text-darkgray text-base lg:text-sm lg:w-5/12">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable.
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 mt-6">
          <img src="./images/Company/Team/Team 1.svg" alt="" />
          <img src="./images/Company/Team/Team 2.svg" alt="" />
          <img src="./images/Company/Team/Team 3.svg" alt="" />
          <img src="./images/Company/Team/Team 4.svg" alt="" />
          <img src="./images/Company/Team/Team 5.svg" alt="" />
          <img src="./images/Company/Team/Team 6.svg" alt="" />
          <img src="./images/Company/Team/Team 7.svg" alt="" />
          <img src="./images/Company/Team/Team 8.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
