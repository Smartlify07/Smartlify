import Button from "../../../Components/Button";
import useIcons from "../../../hooks/useIcons";

const Header = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <section className="bg-verylightorange px-6  py-20   flex flex-col items-center font-poppins ">
      <div className="lg:w-11/12 xl:w-10/12  flex flex-col lg:flex-row justify-between lg:items-center">
        <header className="lg:w-9/12 flex flex-col gap-5">
          <h6 className="text-darkblue font-semibold uppercase ">
            our services
          </h6>

          <h1 className="text-darkblue font-semibold text-3xl  lg:text-5xl leading-[2.3rem] lg:w-9/12">
            We Build Software Solution that Solve Clients Business Challenges
          </h1>

          <p className="text-darkblue font-light  lg:w-[50%] text-[16px]">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>

          <Button
            background="bg-royalblue"
            value="Request a Quote"
            icon={<FaArrowRightLong />}
          />
        </header>

        <ul className="flex flex-col text-lg  mt-8 gap-3 text-darkblue font-semibold  lg:mt-0 lg:text-xl">
          <li>Technical support</li>
          <li>Development</li>
          <li>AWS/Azure </li>
          <li>Consulting</li>
          <li>Information Technology</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
