const Intro = () => {
  return (
    <section className="py-12 px-6 flex flex-col gap-10 font-poppins items-center md:px-20 lg:px-6">
      <div className="flex items-start  lg:gap-4 lg:flex-row lg:items-start justify-between lg:w-11/12 xl:w-10/12">
        <header className="flex flex-col  gap-4 items-center text-center">
          <h6 className="text-darkblue font-light text-lg  uppercase lg:text-sm">
            career at finsweet
          </h6>
          <h1 className="text-darkblue font-semibold text-3xl lg:text-4xl lg:w-5/12 ">
            We hired people who are Always Passionate about what they do
          </h1>

          <p className="text-darkblue font-light text-base lg:text-sm lg:w-7/12">
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw .
          </p>
        </header>

        <img src="/images/Shapes.svg" className="w-5 lg:w-auto" alt="shapes" />
      </div>

      <h1 className="text-7xl font-extrabold lg:text-[10rem] text-transparent bg-center bg-clip-text bg-[url('/images/About/Image1.png')]">
        Careers
      </h1>

      <h6 className="text-darkblue text-lg font-semibold flex flex-col gap-3 items-center lg:text-base">
        See Our Open Positions <span className="text-lg">👇</span>
      </h6>
    </section>
  );
};

export default Intro;
