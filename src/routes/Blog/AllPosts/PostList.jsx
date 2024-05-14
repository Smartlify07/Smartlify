import { Link, useLoaderData } from "react-router-dom";
import { dateFormatter } from "../../../dateFormatter";

const PostList = () => {
  const posts = useLoaderData();

  return (
    <section className="grid md:grid-cols-2 gap-5 justify-items-center lg:grid-cols-3">
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </section>
  );
};

const PostItem = (props) => {
  return (
    <div className="flex flex-col gap-0  bg-white shadow-sm rounded-sm">
      <img src={props.blogCover} className="object-cover" alt="coverImg" />
      <div className="flex flex-col gap-2 p-7  h-full justify-between">
        <header>
          <Link
            to={props.id.toString()}
            className="text-darkblue font-semibold text-2xl leading-7 "
          >
            {props.title}
          </Link>
        </header>

        <p className="text-darkgray text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          harum blanditiis enim at est tempore sunt dolores repellendus dolorem
          eos!
        </p>

        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={props.authorImg}
            alt="avatar"
          />

          <div className="flex flex-col  mt-3">
            <h6 className="text-darkblue text-sm font-extralight">
              {props.author}
            </h6>
            <p className="text-darkgray text-sm">
              {dateFormatter(props.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
