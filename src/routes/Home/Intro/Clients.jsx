const Clients = () => {
  return (
    <>
      <div className="flex items-center justify-around mt-10 py-5 ">
        <div className="flex flex-col ">
          <h4 className="text-gray-600 font-semibold">Our clients</h4>
          <p className="text-base text-white font-semibold">
            We&apos;ve Worked with
          </p>
        </div>

        <div className="flex gap-3 items-center  ">
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
