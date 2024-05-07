const processes = [
  {
    icon: "./images/Process/discover.png",
    heading: "Discover",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: 1,
  },
  {
    icon: "./images/Process/design.png",

    heading: "Designing",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: 2,
  },
  {
    icon: "./images/Process/development.png",

    heading: "Development",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: 3,
  },
  {
    icon: "./images/Process/testing.png",
    heading: "Testing",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: 4,
  },
  {
    icon: "./images/Process/deployment.png",
    heading: "Deployment",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: 5,
  },
  {
    icon: "./images/Process/maintenance.png",
    heading: "Maintenance",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent.",
    id: 6,
  },
];

const ProcessBoxes = () => {
  return (
    <div className="font-poppins mt-10 grid grid-cols-3 gap-8">
      {processes.map((process) => (
        <ProcessBox key={process.id} {...process} />
      ))}
    </div>
  );
};

const ProcessBox = (props) => {
  return (
    <>
      <div className="border border-gray-200  px-6 py-4 rounded-sm w-full relative">
        <div className="flex justify-end">
          <h3 className="text-lightgray font-bold text-xl">0{props.id}</h3>
        </div>
        <div className="flex gap-2 items-start ">
          <img src={props.icon} alt="icon" className="w-10" />

          <div className="flex flex-col gap-2">
            <h3 className="text-black font-semibold text-base ">
              {props.heading}
            </h3>
            <p className="text-darkblue font-extralight opacity-80 text-sm">
              {props.text}
            </p>
          </div>
        </div>

        {(props.id === 1 && <Gradient id={1} />) ||
          (props.id === 6 && <Gradient id={6} />)}
      </div>
    </>
  );
};

function Gradient(props) {
  return (
    <div
      className={`flex absolute ${props.id === 6 && `top-0`} ${
        props.id === 1 && `bottom-0`
      } left-0 w-full`}
    >
      <span className="bg-lightorange h-2 w-[20%]"></span>
      <span className="bg-verylightorange h-2 w-[60%]"></span>
      <span className="bg-royalblue h-2 w-[20%]"></span>
    </div>
  );
}

export default ProcessBoxes;
