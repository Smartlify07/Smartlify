import { Link, NavLink } from "react-router-dom";
import useIcons from "../../../hooks/useIcons";

const blogPosts = [
  {
    image: "./images/BlogSection/Image (1).svg",
    id: 1,
    datePublished: "Jan 19, 2021",
    title: "Today’s best design trends for digital products",
  },
  {
    image: "./images/BlogSection/Image.svg",
    id: 2,
    datePublished: "Jul 22, 2011",
    title: "A practical guide to building a brand strategy",
  },
];

const BlogBoxes = () => {
  return (
    <div className="grid gap-10 mt-6 lg:mt-0 lg:grid-cols-2 lg:gap-7">
      {blogPosts.map((post) => (
        <BlogBox
          key={post.id}
          datePublished={post.datePublished}
          title={post.title}
          image={post.image}
        />
      ))}
    </div>
  );
};

const BlogBox = (props) => {
  const { FaArrowRightLong } = useIcons();
  return (
    <div className="bg-white shadow-sm rounded-b-lg flex flex-col xl:flex-row items-center  gap-4 ">
      <img src={props.image} className="w-full object-contain" alt="" />
      <div className="px-5 py-6 xl:px-0 xl:py-0">
        <h5 className="text-darkgray text-[16px] font-semibold mb-2">
          {props.datePublished}
        </h5>

        <h3 className=" text-darkblue font-semibold text-xl">{props.title}</h3>

        <Link
          className={" text-lightblue text-base flex items-center gap-4 mt-3"}
        >
          Read More
          <FaArrowRightLong className="text-2xl text-darkblue" />
        </Link>
      </div>
    </div>
  );
};

export default BlogBoxes;
