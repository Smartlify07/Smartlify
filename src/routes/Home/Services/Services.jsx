import { Link, NavLink } from "react-router-dom";
import Button from "../../../Components/Button";
import useIcons from "../../../hooks/useIcons";

const services = [
  {
    icon: "./images/Services/support.png",
    heading: "Technical support",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
  },

  {
    icon: "./images/Services/settings.png",
    heading: "Testing Management",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
  },

  {
    icon: "./images/Services/development.png",
    heading: "Development",
    text: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service",
  },
];
const Services = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <section className="font-poppins py-20 px-6 bg-lightpink flex flex-col items-center">
      <div className="lg:w-11/12 xl:w-10/12">
        <h6 className="text-black uppercase text-sm my-4">our services</h6>
        <header>
          <h1 className="text-darkblue font-semibold text-3xl lg:w-[50%] mb-6">
            We build software solutions that solve client&apos;s business
            challenges
          </h1>
        </header>

        <Button
          value={"Start a project"}
          background="bg-royalblue"
          icon={<FaArrowRightLong />}
        />

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-20">
          {services.map((service) => (
            <Service
              key={service.heading}
              heading={service.heading}
              text={service.text}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function Service(props) {
  const { FaArrowRightLong } = useIcons();
  return (
    <div className="bg-white px-8 py-8  flex flex-col justify-start rounded-md shadow-sm  gap-5">
      <img src={props.icon} className="w-12" alt={props.heading} />
      <h3 className="text-black font-semibold text-lg ">{props.heading}</h3>
      <p className="text-darkgray text-base font-normal">{props.text}</p>
      <Link className={"text-base flex items-center gap-3 text-blue-500"}>
        Read more
        <FaArrowRightLong className="text-2xl text-darkblue" />
      </Link>
    </div>
  );
}

export default Services;
