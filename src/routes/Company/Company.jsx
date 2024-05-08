import FooterBottom from "../../Components/Footer/FooterBottom";
import FooterTop from "../../Components/Footer/FooterTop";
import NewsLetter from "../../Components/NewsLetter";
import Expertise from "../Home/Expertise/Expertise";
import Intro from "./Intro/Intro";
import OurStory from "./Our Story/OurStory";
import OurTeam from "./Our Team/OurTeam";
import OurVision from "./Our Vision/OurVision";

const Company = () => {
  return (
    <>
      <Intro />
      <OurStory />
      <Expertise />
      <OurVision />
      <OurTeam />
      <NewsLetter />
      <FooterTop />
      <FooterBottom />
    </>
  );
};

export default Company;
