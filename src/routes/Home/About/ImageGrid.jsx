const ImageGrid = () => {
  return (
    <div className="relative flex items-center  justify-center px-4">
      <div className="self-center   grid grid-cols-3 gap-4 mt-6 py-7 relative w-11/12">
        <img src="./images/About/Image 1.png" alt="" />
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
