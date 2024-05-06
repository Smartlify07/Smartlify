import About from "./About/About";
import Expertise from "./Expertise/Expertise";
import Intro from "./Intro/Intro";
import ProcessSection from "./Process/ProcessSection";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Expertise />
      <Services />
      <ProcessSection />
    </>
  );
};

export default Home;
