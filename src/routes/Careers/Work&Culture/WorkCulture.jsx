import workcultures from "../../../data/workculture.json";

const WorkCulture = () => {
  return (
    <section className="font-poppins py-12 px-6 bg-verylightgray mb-6 flex flex-col items-center md:px-20 lg:px-6">
      <div className="flex flex-col gap-6 lg:w-11/12 xl:w-10/12">
        <header className="flex flex-col gap-4">
          <h6 className="text-sm font-semibold uppercase text-black">
            our work & culture
          </h6>
          <h1 className="text-darkblue font-semibold text-2xl lg:w-5/12 lg:text-3xl">
            Come and join a team of highly skilled professionals.
          </h1>
          <p className="text-base lg:text-sm text-darkgray lg:w-6/12">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw his giving Remain expense you position concluded.
          </p>
        </header>

        <WorkCultureList />
      </div>
    </section>
  );
};

const WorkCultureList = () => {
  return (
    <div className="grid grid-cols-1 gap-3 mt-5 md:grid-cols-2 xl:grid-cols-3">
      {workcultures.map((item) => (
        <WorkCultureBox key={item.emoji} {...item} />
      ))}
    </div>
  );
};

const WorkCultureBox = (props) => {
  return (
    <div className="bg-white rounded-sm py-7 px-6 w-full flex flex-col gap-2 shadow-sm ">
      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-verylightorange">
        {props.emoji}
      </div>
      <h3 className="text-darkblue text-lg font-semibold lg:text-base">
        {props.heading}
      </h3>
      <p className="text-darkgray text-base lg:text-sm">{props.text}</p>
    </div>
  );
};

export default WorkCulture;
