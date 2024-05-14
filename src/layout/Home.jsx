import About from "../routes/Home/About/About";
import BlogSection from "../routes/Home/BlogSection/BlogSection";
import Expertise from "../routes/Home/Expertise/Expertise";
import Intro from "../routes/Home/Intro/Intro";
import ProcessSection from "../routes/Home/Process/ProcessSection";
import Services from "../routes/Home/Services/Services";
import Testimonials from "../routes/Home/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Expertise />
      <Services />
      <ProcessSection />
      <Testimonials />
      <BlogSection />
    </>
  );
};

export default Home;
