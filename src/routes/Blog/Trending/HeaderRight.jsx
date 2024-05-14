import { Link, useLoaderData } from "react-router-dom";
import { dateFormatter } from "../../../dateFormatter";
export const HeaderRight = () => {
  const blogPosts = useLoaderData();

  const suggestedPosts = [...blogPosts.slice(1, 4)];

  return (
    <aside className="bg-verylightorange p-10 flex flex-col gap-8 lg:gap-10 lg:w-7/12 h-full">
      {suggestedPosts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </aside>
  );
};

const PostItem = (props) => {
  return (
    <div className="flex flex-col gap-1">
      <Link
        to={props.id.toString()}
        className="text-xl text-darkblue font-semibold"
      >
        {props.title}
      </Link>
      <div className="flex gap-2 items-center">
        <img
          src={props.authorImg}
          className=" object-cover rounded-full w-6 h-6"
          alt=""
        />
        <div className="flex flex-col gap-0">
          <h5 className="text-darkblue font-extralight text-base">
            {props.author}
          </h5>

          <p className="text-darkgray text-sm font-light">
            {dateFormatter(props.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};
