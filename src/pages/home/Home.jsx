
import Sponsors from "../../components/Sponsors";
import {
  Header,
  Hero,
  hotDeals,
  HotDeals,
  Services,
  Products,
  Footer,
  Categories
} from "../../utils/data";

const Home = () => {
  return (
    <div>
      <Header showNav={true} />
      <Hero />
      <Categories />
      <section className="min-h-screen mx-10 flex flex-col overflow-hidden">
        <Services />
        <HotDeals {...hotDeals.summer} />
      </section>

      <Products />

      <div className="pt-48 pb-16 flex items-center mx-10">
        <HotDeals {...hotDeals.blackFriday} />
      </div>
        <Sponsors />
        <Footer />

    </div>
  );
};

export default Home;
