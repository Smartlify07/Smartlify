const Intro = () => {
  return (
    <section className="py-12 px-6 flex flex-col items-center font-poppins">
      <div className=" relative flex items-start justify-between lg:w-11/12 xl:w-10/12">
        <header className="flex flex-col gap-3">
          <div className="bg-verylightorange w-5 h-5"></div>
          <h6 className="text-darkblue  uppercase">company</h6>
          <h1 className="text-darkblue font-semibold text-3xl lg:w-5/12">
            Award-winning Company seen and used by millions around the world.
          </h1>
          <p className="text-darkblue text-sm font-light lg:w-6/12">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The Maker
            is a decentralized.
          </p>
        </header>

        <img src="./images/Shapes.svg" alt="" />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-8 lg:grid-cols-3 lg:w-10/12">
        <img src="./images/About/Image 1.png" alt="" />
        <img src="./images/About/Image 2.png" alt="" />
        <img src="./images/About/Image 3.png" alt="" />
      </div>
    </section>
  );
};

export default Intro;
