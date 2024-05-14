import PostList from "./PostList";

const AllPosts = () => {
  return (
    <section className="flex flex-col bg-verylightgray items-center py-20 px-6 md:px-20 lg:px-6 ">
      <div className="flex flex-col gap-6 lg:w-11/12 xl:w-10/12">
        <header>
          <h1 className="text-darkblue font-semibold text-2xl capitalize lg:text-3xl">
            All posts
          </h1>
        </header>

        <PostList />
      </div>
    </section>
  );
};

export default AllPosts;
