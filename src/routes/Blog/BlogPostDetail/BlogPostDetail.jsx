import BlogPostContent from "./BlogPostContent";
import Header from "./Header";

const BlogPostDetail = () => {
  return (
    <section className="flex flex-col font-poppins">
      <Header />
      <BlogPostContent />
    </section>
  );
};

export default BlogPostDetail;
