import TestimonialCards from "./TestimonialCards";

const Testimonials = () => {
  return (
    <section className="bg-skyblue py-20 px-6  font-poppins flex flex-col items-center ">
      <div className="lg:w-11/12 xl:w-10/12 flex flex-col  lg:flex-row items-center justify-between gap-10">
        <div className="relative w-full flex flex-col gap-2 py-5">
          <div className="w-3 h-3 bg-royalblue absolute top-[-7px]"></div>

          <h1 className="text-darkblue font-semibold text-3xl xl:w-[70%]  ">
            Our customers love what we do
          </h1>
          <p className="text-[18px] lg:text-[16px] text-darkblue font-medium">
            Transform your idea into reality with finsweet
          </p>
          <p className="text-[16px] lg:text-[14px] text-darkblue  font-normal">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div
            className="flex items-center self-center lg:self-start
           gap-5 mt-4"
          >
            <img
              src="./images/Testimonials/Image 1.svg"
              className="w-10 lg:w-8"
              alt="avatar"
            />
            <img
              src="./images/Testimonials/Image 2.svg"
              className="w-10 lg:w-8"
              alt="avatar"
            />
            <img
              src="./images/Testimonials/Image 3.svg"
              className="w-10 lg:w-8"
              alt="avatar"
            />
          </div>

          <p className="text-black text-[14px] font-normal mt-2 text-center lg:text-left">
            <span className="text-base font-semibold">30+ </span>
            Customer Reviews
          </p>
        </div>

        <TestimonialCards />
      </div>
    </section>
  );
};

export default Testimonials;