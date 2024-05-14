import { Link, useLoaderData } from "react-router-dom";
import { Fragment } from "react";
import useIcons from "../../../hooks/useIcons";
import { dateFormatter } from "../../../dateFormatter";

export const HeaderLeft = () => {
  const blogPosts = useLoaderData();
  const { HiOutlineArrowLongRight } = useIcons();

  // Make shift to get trending posts: Get the first  post
  const topPost = [...blogPosts.slice(0, 1)];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="bg-lightorange w-5 h-5"></div>
        <h6 className="text-darkblue text-sm uppercase">trending</h6>
      </div>

      <div className="flex flex-col gap-3">
        {topPost.map((post) => (
          <Fragment key={post.id}>
            <header className="flex flex-col gap-3">
              <h1
                className="text-darkblue font-semibold text-2xl md:text-4xl"
                key={post.id}
              >
                {post.title}
              </h1>
              <p className="text-base text-darkblue mb-3 lg:w-9/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, aspernatur exercitationem cum repellat temporibus odio
                molestias cupiditate? Facilis, natus accusamus.
              </p>

              <Link
                to={post.id.toString()}
                className="text-royalblue text-base flex gap-2 mb-5 items-center"
              >
                Read More{" "}
                <HiOutlineArrowLongRight className="text-darkblue text-2xl" />
              </Link>
            </header>

            <div className="flex flex-col gap-10">
              <div className="flex gap-4 items-center">
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={post.authorImg}
                  alt=""
                />

                <h5 className="text-darkblue font-light text-base">
                  {post.author}
                </h5>
                <p className="text-darkgray font-normal text-base">
                  Posted on {dateFormatter(post.createdAt)}
                </p>
              </div>

              <img className="lg:w-7/12" src={post.blogCover} alt="" />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
