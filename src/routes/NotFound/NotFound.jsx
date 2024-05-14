import { Link } from "react-router-dom";
import useIcons from "../../hooks/useIcons";

const NotFound = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <section className="flex font-poppins flex-col px-6 items-center justify-center gap-5  min-h-screen overflow-hidden">
      <h1 className="text-darkblue font-semibold text-3xl text-center lg:text-3xl lg:w-6/12">
        &ldquo;Oops! Looks like you&apos;ve taken a wrong turn. Don&apos;t
        worry, even the best explorers get lost sometimes.&rdquo;
      </h1>

      <Link
        to={"/"}
        className="text-lg font-bold flex items-center text-center gap-3  text-darkgray"
      >
        Let&apos;s get you back on track!&ldquo;{" "}
        <FaArrowRightLong className="text-xl" /> 😊
      </Link>
    </section>
  );
};

export default NotFound;
