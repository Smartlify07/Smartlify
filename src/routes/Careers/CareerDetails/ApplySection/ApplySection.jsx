import { Form, redirect } from "react-router-dom";
import { useState } from "react";
import Button from "../../../../Components/Button";
import useIcons from "../../../../hooks/useIcons";
import { useLoaderData } from "react-router-dom";

const ApplySection = () => {
  const { id } = useLoaderData();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData({ [name]: value });
  }

  const { HiOutlineArrowLongRight } = useIcons();
  return (
    <section className="py-12  flex flex-col items-center font-poppins lg:w-11/12">
      <div className="lg:w-11/12 xl:w-10/12 flex flex-col">
        <header>
          <h1 className="text-darkblue font-semibold text-2xl lg:text-3xl">
            Apply Now
          </h1>
        </header>
        <Form method="post" action={`/careers/${id}`}>
          <div className="flex flex-col gap-3 mt-6 lg:gap-5 lg:grid lg:grid-cols-2">
            <input
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
              className="w-full bg-skyblue py-4 px-5 placeholder:text-darkblue placeholder:font-medium"
              placeholder="First name"
            />
            <input
              type="text"
              value={formData.lastName}
              name="lastName"
              onChange={handleChange}
              className="w-full bg-skyblue py-4 px-5 placeholder:text-darkblue placeholder:font-medium"
              placeholder="Last name"
            />
            <input
              type="text"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="w-full bg-skyblue py-4 px-5 placeholder:text-darkblue placeholder:font-medium"
              placeholder="Email address"
            />
            <input
              type="text"
              value={formData.phone}
              name="phone"
              onChange={handleChange}
              className="w-full bg-skyblue py-4 px-5 placeholder:text-darkblue placeholder:font-medium"
              placeholder="Mobile no."
            />
            <textarea
              name="description"
              onChange={handleChange}
              value={formData.description}
              placeholder="Why do you thing you are good fit for Ether?"
              className="w-full h-32 py-7 px-6 bg-skyblue placeholder:text-darkblue placeholder:font-medium col-span-full"
            ></textarea>

            <div className="flex flex-col gap-4 lg:items-center lg:flex-row mt-3 col-span-full">
              <input
                type="checkbox"
                className="w-8 h-8  checked:bg-royalblue "
              />
              <label
                className="text-darkblue text-sm  lg:text-left lg:w-9/12 lg:text-sm"
                htmlFor="checkbox"
              >
                I agree to accept the privacy policy, We will add your contact
                details provided in this form to our system for contacting you
                regarding your request.
              </label>
            </div>

            <div className="col-span-2 mt-5 lg:mt-0">
              <Button
                background="bg-royalblue"
                value="Submit Application"
                icon={<HiOutlineArrowLongRight className="text-2xl" />}
              />
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export const applyAction = async ({ request }) => {
  console.log(request);

  const data = await request.formData();
  const submission = {
    name: `${data.get("firstName")} ${data.get("lastName")}`,
    email: data.get("email"),
    phoneNumber: data.get("phone"),
    jobOffer: data.get("description"),
  };

  console.log(submission);

  return redirect("/careers");
};

export default ApplySection;
