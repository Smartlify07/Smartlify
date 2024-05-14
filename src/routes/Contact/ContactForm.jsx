import Button from "../../Components/Button";
import useIcons from "../../hooks/useIcons";

const ContactForm = () => {
  const { HiOutlineArrowLongRight } = useIcons();
  return (
    <>
      <form className="flex flex-col gap-5  ">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-darkgray">
            Name
          </label>
          <input
            type="text"
            className="py-3 border-b border-b-lightgray text-sm text-darkblue focus:border-b-1 focus:outline-none"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-darkgray ">
            E-mail
          </label>
          <input
            type="email"
            className="py-3 border-b border-b-lightgray text-sm text-darkblue focus:border-b-1 focus:outline-none "
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-darkgray">
            Subject
          </label>
          <input
            type="text"
            className="py-3  border-b border-b-lightgray text-sm text-darkblue focus:border-b-1 focus:outline-none"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-darkgray">
            Message
          </label>
          <textarea
            type="text"
            className="py-3  border-b border-b-lightgray text-sm text-darkblue resize-none focus:border-b-1 focus:outline-none"
            placeholder="Type your message"
          ></textarea>
        </div>

        <Button
          background="bg-royalblue"
          value="Send Message"
          icon={<HiOutlineArrowLongRight className="text-2xl" />}
        />
      </form>
    </>
  );
};

export default ContactForm;
