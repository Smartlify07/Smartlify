import { Link, useRouteError } from "react-router-dom";
import useIcons from "../../hooks/useIcons";

const BlogError = () => {
  const error = useRouteError();
  const { HiOutlineArrowLongRight } = useIcons();
  return (
    <section className="h-screen flex flex-col items-center gap-5 justify-center">
      <div className="flex flex-col gap-5  items-center lg:w-11/12 xl:w-10/12">
        <h1 className="text-darkblue font-semibold text-center text-3xl lg:w-7/12">
          {error.message}
        </h1>
        <Link
          to={"/careers"}
          className="text-xl font-semibold text-lightorange flex items-center gap-3 lg:text-2xl"
        >
          Let&apos;s get you back on track 😊{" "}
          <HiOutlineArrowLongRight className="text-darkblue text-2xl" />
        </Link>
      </div>
    </section>
  );
};

export default BlogError;
