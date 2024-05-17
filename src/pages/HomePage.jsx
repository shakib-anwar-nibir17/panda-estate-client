import Banner from "../components/Home/Banner";
import CompanyProfile from "../components/Home/CompanyProfile";
import Services from "../components/Home/Services";
import Subscribe from "../components/Home/Subscribe";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <CompanyProfile />
      <Services />
      <Subscribe />
    </section>
  );
};

export default HomePage;
