import ProcessSection from "../Home/Process/ProcessSection";
import AwsSection from "./Cloud/AwsSection";
import ConsultSection from "./Consult/ConsultSection";
import Development from "./Development/Development";
import Header from "./Header/Header";
import Support from "./Support/Support";
import NewsLetter from "../../Components/NewsLetter";
import FooterTop from "../../Components/Footer/FooterTop";
import FooterBottom from "../../Components/Footer/FooterBottom";
import InfoTech from "./InfoTech/InfoTech";
const Services = () => {
  return (
    <>
      <Header />
      <ProcessSection background="bg-skyblue" />
      <Support />
      <Development />
      <AwsSection />
      <ConsultSection />
      <InfoTech />
      <NewsLetter />
      <FooterTop />
      <FooterBottom />
    </>
  );
};

export default Services;
