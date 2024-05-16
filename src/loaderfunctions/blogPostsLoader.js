export const blogPostsLoader = async () => {
  const response = await fetch(
    "https://json-server-vercel-three-steel.vercel.app/posts"
  );
  const posts = await response.json();
  return posts;
};
