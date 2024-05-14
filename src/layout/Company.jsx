import Expertise from "../routes/Home/Expertise/Expertise";
import Intro from "../routes/Company/Intro/Intro";
import OurStory from "../routes/Company/Our Story/OurStory";
import OurTeam from "../routes/Company/Our Team/OurTeam";
import OurVision from "../routes/Company/Our Vision/OurVision";

const Company = () => {
  return (
    <>
      <Intro />
      <OurStory />
      <Expertise />
      <OurVision />
      <OurTeam />
    </>
  );
};

export default Company;
