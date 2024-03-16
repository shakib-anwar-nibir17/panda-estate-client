import Banner from "../components/Home/Banner";
import Featured from "../components/Home/Featured";
import Services from "../components/Home/Services";
import Subscribe from "../components/Home/Subscribe";

const HomePage = () => {
  return (
    <section>
      <Banner />
      <Services />
      <Featured />
      <Subscribe />
    </section>
  );
};

export default HomePage;
