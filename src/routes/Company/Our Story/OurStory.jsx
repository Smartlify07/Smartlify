import { Stat } from "../../Home/About/Stats";
import stats from "../../../data/stats.json";

const OurStory = () => {
  return (
    <section className="px-6 py-20 bg-white flex flex-col items-center font-poppins md:px-20 lg:px-6">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:w-11/12 xl:w-10/12 lg:justify-between">
        <header className="flex flex-col gap-4  ">
          <div className="w-5 h-5 bg-purple-500"></div>
          <h6 className="text-darkblue font-semibold text-lg md:text-xl lg:text-base">
            Our story👇
          </h6>

          <h1 className="text-darkblue font-semibold text-3xl lg:w-9/12">
            From Startups to Titans of Industry
          </h1>

          <p className=" font-light text-darkgray text-base lg:text-sm lg:w-9/12">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic unsatiable saw his giving Remain expense of gay produce
            excited perceived do an a china mean its so ye when in explained
            Hearts am next over match mr partiality not shoud latter thus as out
            no passed forming middleton exercise up
          </p>
        </header>

        <div className="bg-verylightorange px-10 py-7 rounded-sm grid grid-cols-2  gap-5 justify-items-center w-full">
          {stats.map((stat) => (
            <Stat key={stat.id} count={stat.count} text={stat.text} />
          ))}
        </div>
      </div>

      <Logos />
    </section>
  );
};

const Logos = () => {
  return (
    <div className="grid grid-cols-2 w-full mt-20 gap-3 md:grid-cols-3  lg:grid-cols-3 bg-skyblue xl:grid-cols-5 lg:w-10/12">
      <img src="./images/logos/logosblack/Logo-1.svg" alt="" />
      <img src="./images/logos/logosblack/Logo-2.svg" alt="" />
      <img src="./images/logos/logosblack/Logo-3.svg" alt="" />
      <img src="./images/logos/logosblack/Logo-4.svg" alt="" />
      <img src="./images/logos/logosblack/Logo.svg" alt="" />
    </div>
  );
};

export default OurStory;
