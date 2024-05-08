const NewsLetter = () => {
  return (
    <section className="bg-white px-6 flex flex-col items-center mb-10 ">
      <div className="bg-royalblue py-6 px-10 w-full md:w-11/12 xl:w-10/12 relative">
        <img
          src="./images/ShapesBig.svg"
          className="absolute top-0 left-0"
          alt="pattern"
        />

        <div className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:items-center lg:gap-10 my-6 md:py-10">
          <header className="">
            <h3 className="text-white  text-base uppercase  mb-3">
              newsletter
            </h3>
            <h1 className="text-white font-semibold md:w-10/12 text-3xl lg:text-xl lg:w-10/12 xl:text-4xl">
              Subscribe our NewsLetter to get Latest Updates.
            </h1>
          </header>

          <form action="">
            <input
              type="email"
              name="email"
              id="email"
              className={
                "w-full md:w-[450px] lg:w-[450px] py-5 px-5 md:py-6 lg:text-xl text-darkgray"
              }
              placeholder="smartlify09@gmail.com"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
