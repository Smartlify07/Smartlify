export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch("http://localhost:4000/careers/" + id);
  if (!response.ok) {
    throw Error("Oops couldn't find that career 😶");
  }
  const data = await response.json();

  return data;
};
