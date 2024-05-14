import { Outlet } from "react-router-dom";
import AllPosts from "../routes/Blog/AllPosts/AllPosts";
import RecentPosts from "../routes/Blog/RecentPosts/RecentPosts";
import Header from "../routes/Blog/Trending/Header";

const Blog = () => {
  return (
    <>
      <Header />
      <RecentPosts />
      <AllPosts />

      <Outlet />
    </>
  );
};

export default Blog;
