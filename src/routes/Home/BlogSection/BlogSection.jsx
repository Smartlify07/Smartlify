import BlogBoxes from "./BlogBoxes";

const BlogSection = () => {
  return (
    <section className="bg-verylightblue py-20  px-6 flex flex-col items-center   mx-auto font-poppins">
      <div className="lg:w-11/12 xl:w-10/12  items-center gap-10 ">
        <header className="relative py-2 mb-6">
          <span className="absolute top-0 left-0 w-3 h-3 bg-royalblue"></span>
          <h1 className="text-darkblue font-semibold text-4xl my-3">
            Read our latest blogs & news
          </h1>
        </header>

        <BlogBoxes />
      </div>
    </section>
  );
};

export default BlogSection;
