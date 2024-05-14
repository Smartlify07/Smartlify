import PostCards from "./PostCards";

const RecentPosts = () => {
  return (
    <section className="py-20 px-6 flex flex-col items-center md:px-20 lg:px-6 font-poppins">
      <div className=" flex flex-col gap-10 lg:w-11/12 xl:w-10/12">
        <header>
          <h1 className="text-darkblue font-semibold text-2xl capitalize lg:text-3xl">
            Read recent posts
          </h1>
        </header>

        <PostCards />
      </div>
    </section>
  );
};

export default RecentPosts;
