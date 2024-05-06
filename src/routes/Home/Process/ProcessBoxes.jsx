const processes = [
  {
    icon: "./images/Process/discover.png",
    heading: "Discover",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: "01",
  },
  {
    icon: "./images/Process/design.png",

    heading: "Designing",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: "02",
  },
  {
    icon: "./images/Process/development.png",

    heading: "Development",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: "03",
  },
  {
    icon: "./images/Process/testing.png",
    heading: "Testing",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: "04",
  },
  {
    icon: "./images/Process/deployment.png",
    heading: "Deployment",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: "05",
  },
  {
    icon: "./images/Process/maintenance.png",
    heading: "Maintenance",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: "06",
  },
];

const ProcessBoxes = () => {
  return (
    <div className="font-poppins mt-10 grid grid-cols-3 gap-6">
      {processes.map((process) => (
        <ProcessBox key={process.id} {...process} />
      ))}
    </div>
  );
};

const ProcessBox = (props) => {
  return (
    <>
      <div className="border border-gray-200  px-6 py-3">
        <div className="flex justify-end">
          <h3 className="text-lightgray font-bold text-xl">{props.id}</h3>
        </div>
        <div className="flex gap-2 items-start ">
          <img src={props.icon} alt="icon" className="w-8" />

          <div className="flex flex-col gap-2">
            <h3 className="text-black font-semibold text-base ">
              {props.heading}
            </h3>
            <p className="text-darkblue font-extralight">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessBoxes;
