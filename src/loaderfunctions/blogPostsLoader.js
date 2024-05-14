export const blogPostsLoader = async () => {
  const response = await fetch("http://localhost:4001/posts");
  const posts = await response.json();
  return posts;
};
