import NavBarLayout from "./NavBarLayout";
import FooterTop from "../Components/Footer/FooterTop";
import FooterBottom from "../Components/Footer/FooterBottom";
import NewsLetter from "../Components/NewsLetter";
const RootLayout = () => {
  return (
    <>
      <NavBarLayout />
      <NewsLetter />
      <FooterTop />
      <FooterBottom />
    </>
  );
};

export default RootLayout;
