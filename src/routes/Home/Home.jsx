import NewsLetter from "../../Components/NewsLetter";
import About from "./About/About";
import BlogSection from "./BlogSection/BlogSection";
import Expertise from "./Expertise/Expertise";
import FooterBottom from "../../Components/Footer/FooterBottom";
import FooterTop from "../../Components/Footer/FooterTop";
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
      <NewsLetter />
      <FooterTop />
      <FooterBottom />
    </>
  );
};

export default Home;
