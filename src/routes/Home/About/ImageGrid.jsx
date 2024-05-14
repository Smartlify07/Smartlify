const ImageGrid = () => {
  return (
    <div className="relative flex items-center   justify-center ">
      <div className="self-center grid-cols-2  grid lg:grid-cols-3 gap-4 mt-6 py-7 relative ">
        <img src="./images/About/Image1.png" alt="" />
        <img src="./images/About/Image 2.png" alt="" />
        <img
          className="object-contain"
          src="./images/About/Image 3.png"
          alt=""
        />
      </div>

      {/* <div className="absolute right-[-3px] top-[50px] h-[200px] bg-black px-1"></div> */}
    </div>
  );
};

export default ImageGrid;
