import { Link, NavLink } from "react-router-dom";
import useIcons from "../../../hooks/useIcons";

const FooterTop = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <section className="bg-white py-0 lg:py-20  px-6 relative flex flex-col items-center font-poppins">
      <div className="grid lg:grid-cols-2 gap-5 md:w-11/12 xl:w-10/12 lg:mt-10 lg:py-10">
        <div className="flex flex-col gap-4  py-4 px-4">
          <h1 className="text-darkblue font-semibold text-3xl lg:text-3xl lg:w-[100%] ">
            Let's make something special
          </h1>

          <h4 className="text-darkblue font-semibold text-lg">Let's talk!✌️</h4>
          <p className="text-darkblue text-base">09066927835</p>
          <p className="text-darkblue text-base">smartlify09@gmail.com</p>
        </div>
        <div className="grid grid-cols-2 py-4 md:py-0  lg:grid-cols-3 gap-5">
          <div className="flex flex-col gap-4  py-4 px-4">
            <ul className="flex flex-col  gap-3">
              <Link className={"text-darkblue font-semibold text-base "}>
                Home
              </Link>
              <Link className={"text-darkblue font-semibold text-base "}>
                Service
              </Link>
              <Link className={"text-darkblue font-semibold text-base "}>
                Company
              </Link>
              <Link className={"text-darkblue font-semibold text-base "}>
                Career
              </Link>
              <Link className={"text-darkblue font-semibold text-base "}>
                News
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4  py-4 px-4">
            <ul className="flex flex-col  gap-3">
              <Link className={"text-darkblue text-base font-semibold "}>
                Service
              </Link>
              <Link className={"text-darkblue text-base "}>
                Technical support
              </Link>
              <Link className={"text-darkblue text-base "}>Testing</Link>
              <Link className={"text-darkblue text-base "}>Development</Link>
              <Link className={"text-darkblue text-base "}>AWS/Azure</Link>
              <Link className={"text-darkblue text-base "}>
                Information Technology
              </Link>
            </ul>
          </div>

          <div className="flex flex-col gap-4 w-full py-4 px-4">
            <ul className="flex flex-col  gap-3">
              <Link className={"text-darkblue text-base font-semibold"}>
                Resources
              </Link>
              <Link className={"text-darkblue text-base"}>About us</Link>
              <Link className={"text-darkblue text-base"}>Testimonial</Link>
              <Link className={"text-darkblue text-base"}>Privacy policy</Link>
              <Link className={"text-darkblue text-base"}>Terms of use</Link>
              <Link className={"text-darkblue text-base"}>Blog</Link>
            </ul>
          </div>
        </div>
        <div className="flex col-span-full justify-between items-center  py-4 my-5 w-full">
          <p className="text-darkblue text-sm">Ibeju-Lekki, Lagos. Nigeria</p>

          <Link className="font-semibold text-darkblue text-base flex items-center gap-2">
            Contact us
            <FaArrowRightLong className=" text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FooterTop;
