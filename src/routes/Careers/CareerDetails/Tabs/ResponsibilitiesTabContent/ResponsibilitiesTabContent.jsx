import { useLoaderData } from "react-router-dom";

const ResponsibilitiesTabContent = () => {
  const career = useLoaderData();
  return (
    <section className="py-10  px-10 lg:w-9/12  flex flex-col items-center">
      <ul>
        {career.responsibilities.map((item) => (
          <li className=" list-disc mb-4" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResponsibilitiesTabContent;
