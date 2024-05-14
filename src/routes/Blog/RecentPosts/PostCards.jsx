import { Link, useLoaderData } from "react-router-dom";
import { dateFormatter } from "../../../dateFormatter";

const PostCards = () => {
  const posts = useLoaderData();
  const recentPosts = [...posts.slice(2, 6)];

  return (
    <section className="grid grid-cols-1  justify-items-center gap-4 md:grid-cols-2">
      {recentPosts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </section>
  );
};

const PostCard = (props) => {
  return (
    <div className="bg-skyblue flex flex-col gap-3 w-full md:w-11/12  items-start lg:w-full lg:flex-row">
      <img
        src={props.blogCover}
        className=" w-full  h-full object-cover lg:w-6/12"
        alt="cover-img"
      />
      <div className="flex flex-col gap-6 px-6 py-6 justify-center h-full lg:px-3">
        <header>
          <Link
            to={props.id.toString()}
            className="text-darkblue font-semibold text-2xl"
          >
            {props.title}
          </Link>
        </header>

        <div className="flex gap-2 items-center">
          <img
            src={props.authorImg}
            className="w-5 h-5 rounded-full object-cover"
            alt="avatar"
          />
          <div className="flex flex-col gap-0">
            <h5 className="text-darkblue font-extralight text-base capitalize">
              {props.author}
            </h5>
            <p className="text-darkgray text-sm font-normal">
              {dateFormatter(props.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
