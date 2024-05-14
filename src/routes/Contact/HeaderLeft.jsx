import ContactForm from "./ContactForm";

const HeaderLeft = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <div className="w-5 h-5 bg-verylightorange"></div>
        <h5 className="text-darkblue font-extralight text-base uppercase">
          Contact us
        </h5>

        <h1 className="text-darkblue font-semibold text-2xl  lg:text-3xl">
          Have a Question?
          <span className="block">Let’s Get in Touch with us 👋</span>
        </h1>
        <p className="text-darkblue font-light text-sm capitalize">
          Fill up the Form and our team will get back to you within 24 hrs
        </p>
      </div>

      <ContactForm />
    </section>
  );
};

export default HeaderLeft;
