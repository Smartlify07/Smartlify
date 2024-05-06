const Numbers = () => {
  const numbers = [
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
  return (
    <>
      <div className="flex items-center gap-8">
        {numbers.map((numberItem) => (
          <Number
            key={numberItem.text}
            count={numberItem.count}
            text={numberItem.text}
          />
        ))}
      </div>
    </>
  );
};

function Number(props) {
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
export default Numbers;
