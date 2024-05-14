const TestimonialCards = () => {
  return (
    <div className="">
      <div className="bg-white px-9 py-10 md:px-12 lg:px-9 w-full rounded-sm relative flex items-start flex-col gap-5 ">
        <Gradient />
        <h3 className="text-darkblue font-semibold text-xl">
          Finsweet has been a wonderful partner to work with. I have been a
          customer now for the past few months now and I have had nothing but
          positive experiences!
        </h3>

        <div className="flex flex-col items-end lg:flex-row gap-2 lg:gap-4 justify-between lg:items-center ">
          <div className="flex items-center gap-3">
            <img src="./images/Testimonials/Image 3.svg" alt="avatar" />
            <div className="flex flex-col">
              <h5 className="text-darkblue text-[15px] font-semibold">
                Johnny Andro
              </h5>
              <p className="text-darkgray text-sm">Director, Company</p>
            </div>
          </div>

          <img className="" src="./images/Testimonials/Logo.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

function Gradient() {
  return (
    <div className="flex flex-col absolute h-full top-0 left-0">
      <span className="px-1 h-[10%] bg-lightorange"></span>
      <span className="px-1 h-[70%] bg-verylightorange"></span>
      <span className="px-1 h-[20%] bg-royalblue"></span>
    </div>
  );
}

export default TestimonialCards;
