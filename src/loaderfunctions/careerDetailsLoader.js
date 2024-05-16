export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(
    "https://json-server-vercel-three-steel.vercel.app/careers/" + id
  );
  if (!response.ok) {
    throw Error("Oops couldn't find that career 😶");
  }
  const data = await response.json();

  return data;
};
