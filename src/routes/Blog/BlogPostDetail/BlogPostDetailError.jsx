import { Link, useRouteError } from "react-router-dom";
import useIcons from "../../../hooks/useIcons";
const BlogPostDetailError = () => {
  const error = useRouteError();
  const { HiOutlineArrowLongRight } = useIcons();
  console.log(error);
  return (
    <section className="bg-verylightgray flex flex-col gap-4 items-center min-h-screen justify-center">
      <h1 className="text-2xl text-darkblue  lg:text-3xl">{error.message}</h1>
      <Link to={"/blog"} className="text-lg ">
        Let&apos;s get you back on track{" "}
        <HiOutlineArrowLongRight className="ml-2 inline text-2xl" />
      </Link>
    </section>
  );
};

export default BlogPostDetailError;
