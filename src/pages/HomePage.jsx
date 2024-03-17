import Banner from "../components/Home/Banner";
import CompanyProfile from "../components/Home/CompanyProfile";
import Faq from "../components/Home/Faq";
import Featured from "../components/Home/Featured";
import Services from "../components/Home/Services";
import Subscribe from "../components/Home/Subscribe";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <CompanyProfile />
      <Services />
      <Featured />
      <Faq />
      <Subscribe />
    </section>
  );
};

export default HomePage;
