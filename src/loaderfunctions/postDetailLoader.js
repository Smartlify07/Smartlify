export const postDetailLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch("http://localhost:4001/posts/" + id);
  if (!response.ok) {
    throw Error("Oops! 😶 couldn't find that Blog ");
  }
  const postData = await response.json();

  return postData;
};
