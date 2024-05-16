export const postDetailLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(
    "https://json-server-vercel-three-steel.vercel.app/posts/" + id
  );
  if (!response.ok) {
    throw Error("Oops! 😶 couldn't find that Blog ");
  }
  const postData = await response.json();

  return postData;
};
