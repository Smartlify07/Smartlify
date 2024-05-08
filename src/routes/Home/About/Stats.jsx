export const stats = [
  {
    count: "1560+",
    text: "Project delivered",
  },
  {
    count: "100+",
    text: "Professional",
  },
  {
    count: "950+",
    text: "Happy Client",
  },
  {
    count: "10 yrs",
    text: "Experiences",
  },
];

const Stats = () => {
  return (
    <>
      <div className="grid grid-cols-2  justify-items-center lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <Stat key={stat.text} count={stat.count} text={stat.text} />
        ))}
      </div>
    </>
  );
};

export function Stat(props) {
  return (
    <div className="flex flex-col gap-3 font-poppins">
      <h3 className="text-darkblue font-semibold  text-4xl">{props.count}</h3>
      <Gradient />
      <p className="text-black font-regular">{props.text}</p>
    </div>
  );
}

function Gradient() {
  return (
    <div className="flex items-center w-[90px]">
      <div className="bg-royalblue w-4 h-1"></div>
      <div className="bg-verylightorange w-12 h-1"></div>
      <div className="bg-lightorange w-7 h-1"></div>
    </div>
  );
}
export default Stats;
