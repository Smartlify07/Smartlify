const Clients = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center justify-around gap-3 xl:gap-6 mt-10 py-5 ">
        <div className="flex flex-col ">
          <h4 className="text-gray-600 text-xl xl:text-left font-semibold text-center mb-1">
            Our clients
          </h4>
          <p className="text-base text-white font-semibold">
            We&apos;ve Worked with
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3  gap-1 xl:grid-cols-5  items-center">
          <img className="w-[10rem]" src="./images/logos/Logo(3).png" alt="" />
          <img className="w-[10rem]" src="./images/logos/Logo(4).png" alt="" />
          <img className="w-[10rem]" src="./images/logos/Logo(5).png" alt="" />
          <img className="w-[10rem]" src="./images/logos/Logo(6).png" alt="" />
          <img className="w-[10rem]" src="./images/logos/Logo(7).png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Clients;
