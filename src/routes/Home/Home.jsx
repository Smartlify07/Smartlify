import About from "./About/About";
import BlogSection from "./BlogSection/BlogSection";
import Expertise from "./Expertise/Expertise";
import Intro from "./Intro/Intro";
import ProcessSection from "./Process/ProcessSection";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

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
