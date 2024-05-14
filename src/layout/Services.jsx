import ProcessSection from "../routes/Home/Process/ProcessSection";
import AwsSection from "../routes/Services/Cloud/AwsSection";
import ConsultSection from "../routes/Services/Consult/ConsultSection";
import Development from "../routes/Services/Development/Development";
import Header from "../routes/Services/Header/Header";
import Support from "../routes/Services/Support/Support";
import InfoTech from "../routes/Services/InfoTech/InfoTech";
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
    </>
  );
};

export default Services;
