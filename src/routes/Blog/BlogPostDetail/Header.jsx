import { useLoaderData } from "react-router-dom";
import { dateFormatter } from "../../../dateFormatter";

const Header = () => {
  const post = useLoaderData();
  return (
    <section className="pt-20 pb-0 px-6 flex flex-col gap-4 items-center md:px-20 lg:px-6">
      <div className="flex flex-col gap-6  lg:w-11/12 xl:w-10/12">
        <div className="flex justify-between">
          <header>
            <h1 className="text-darkblue font-semibold text-2xl lg:text-3xl">
              {post.title}
            </h1>
          </header>

          <img src="../../../../public/images/Shapes.svg" width={30} alt="" />
        </div>

        <p className="text-darkgray text-sm lg:w-11/12 xl:w-6/12 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          commodi veniam delectus corrupti ipsum voluptatibus temporibus
          voluptas odit ea corporis accusantium autem, mollitia eum voluptates
          pariatur assumenda adipisci necessitatibus dicta?
        </p>

        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={post.authorImg}
            alt="avatar"
          />

          <h5 className="text-darkblue font-extralight">{post.author}</h5>
          <p className="text-darkgray text-sm">
            Posted on {dateFormatter(post.createdAt)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
