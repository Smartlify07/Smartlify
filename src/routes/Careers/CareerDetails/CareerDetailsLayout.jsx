import Intro from "../CareerDetails/Intro/Intro";
import Tabs from "./Tabs/Tabs";
import FooterTop from "../../../Components/Footer/FooterTop";
import FooterBottom from "../../../Components/Footer/FooterBottom";
import NewsLetter from "../../../Components/NewsLetter";

const CareerDetailsLayout = () => {
  return (
    <>
      <Intro />
      <Tabs />
      <NewsLetter />
      <FooterTop />
      <FooterBottom />
    </>
  );
};

export default CareerDetailsLayout;
