import Button from "../../../Components/Button";
import useIcons from "../../../hooks/useIcons";

const Header = () => {
  const { FaArrowRightLong } = useIcons();
  return (
    <section className="bg-verylightorange px-6 py-5 lg:py-20 flex flex-col items-center font-poppins ">
      <div className="w-10/12 flex justify-around items-center">
        <header className=" w-9/12">
          <h6 className="text-darkblue font-semibold uppercase mb-3">
            our services
          </h6>

          <h1 className="text-darkblue font-semibold text-3xl mb-4 lg:text-5xl leading-[2.3rem] lg:w-9/12">
            We Build Software Solution that Solve Clients Business Challenges
          </h1>

          <p className="text-darkblue font-light mb-5 lg:w-[50%] text-[16px]">
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

        <ul className="flex flex-col gap-3 text-darkblue font-semibold text-base lg:text-xl">
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
