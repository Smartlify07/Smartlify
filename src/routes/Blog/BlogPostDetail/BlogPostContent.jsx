import { useLoaderData } from "react-router-dom";

const BlogPostContent = () => {
  const post = useLoaderData();

  return (
    <section className="py-20  px-6 flex flex-col items-center md:px-20 lg:px-6">
      <div className="lg:w-11/12 xl:w-10/12 flex flex-col gap-10">
        <img
          src={post.blogCover}
          className="w-full object-cover lg:h-72"
          alt="coverImg"
        />

        <div className=" w-11/12 md:w-9/12 flex flex-col gap-6 self-center ">
          <header>
            <h1 className="text-darkblue font-semibold text-2xl  lg:text-3xl">
              Transform Your Idea Into Reality with Ether a Leading Digital
              Agency
            </h1>
          </header>

          <p className="text-darkblue font-light text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            minus aspernatur enim deserunt dolor ipsum maiores sapiente quaerat
            labore? Minima commodi quis tempora fuga nam facilis illum totam
            molestiae culpa? Deserunt aperiam ad, cum cupiditate fuga sit magni,
            itaque distinctio rem minima, ex harum repudiandae? Sit, numquam!
            Expedita recusandae commodi perspiciatis quia, ab omnis doloremque
            similique praesentium sapiente ad, magnam cum ducimus excepturi
            culpa provident sit eos at amet? Velit?
          </p>
          <p className="text-darkblue font-light text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            minus aspernatur enim deserunt dolor ipsum maiores sapiente quaerat
            labore? Minima commodi quis tempora fuga nam facilis illum totam
            molestiae culpa? Deserunt aperiam ad, cum cupiditate fuga sit magni,
            itaque distinctio rem minima, ex harum repudiandae? Sit, numquam!
            Expedita recusandae commodi perspiciatis quia, ab omnis doloremque
            similique praesentium sapiente ad, magnam cum ducimus excepturi
            culpa provident sit eos at amet? Velit?
          </p>

          <header>
            <h1 className="text-darkblue font-semibold text-xl  lg:text-2xl">
              Transform Your Idea Into Reality with Ether a Leading Digital
              Agency
            </h1>
          </header>

          <p className="text-darkblue font-light text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
            minus aspernatur enim deserunt dolor ipsum maiores sapiente quaerat
            labore? Minima commodi quis tempora fuga nam facilis illum totam
            molestiae culpa? Deserunt aperiam ad, cum cupiditate fuga sit magni,
            itaque distinctio rem minima, ex harum repudiandae? Sit, numquam!
            Expedita recusandae commodi perspiciatis quia, ab omnis doloremque
            similique praesentium sapiente ad, magnam cum ducimus excepturi
            culpa provident sit eos at amet? Velit?
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPostContent;
