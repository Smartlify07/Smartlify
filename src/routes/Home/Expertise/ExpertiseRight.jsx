const ExpertiseRight = () => {
  const blocks = [
    {
      heading: "On Time Delivery",
      text: "Through True Rich Attended does no end it his mother since real had half every him",
      icon: "./images/Expertise/shuttle.png",
    },
    {
      heading: "Best Quality",
      text: "Through True Rich Attended does no end it his mother since real had half every him",
      icon: "./images/Expertise/settings.png",
    },
    {
      heading: "Support Assist",
      text: "Through True Rich Attended does no end it his mother since real had half every him",
      icon: "./images/Expertise/assist.png",
    },
  ];
  return (
    <aside className="relative flex flex-col  xl:flex xl:flex-col gap-3 mt-7">
      {blocks.map((block) => (
        <Block
          key={block.heading}
          heading={block.heading}
          icon={block.icon}
          text={block.text}
        />
      ))}
      <Gradient />
    </aside>
  );
};

const Block = (props) => {
  return (
    <div className="bg-white px-6 lg:w-[400px] py-5 flex items-start gap-5 rounded-sm ">
      <img className="w-9" src={props.icon} alt={props.heading} />

      <div className="flex flex-col gap-1">
        <h4 className="text-darkblue font-semibold capitalize text-base">
          {props.heading}
        </h4>
        <p className="text-darkgray font-[500] text-sm">{props.text}</p>
      </div>
    </div>
  );
};

function Gradient() {
  return (
    <div className="flex absolute bottom-[-8px] w-full  ">
      <div className="bg-lightorange h-2 w-[20%]"></div>
      <div className="bg-verylightorange h-2 w-[60%]"></div>
      <div className="bg-royalblue h-2 w-[20%]"></div>
    </div>
  );
}

export default ExpertiseRight;
