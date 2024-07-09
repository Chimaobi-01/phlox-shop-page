
import Sponsors from "../../components/Sponsors";
import {
  Header,
  Hero,
  hotDeals,
  HotDeals,
  Services,
  Products,
  Footer
} from "../../utils/data";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />

      <section className="min-h-screen m-10 my-24 flex flex-col overflow-hidden">
        <Services />
        <HotDeals {...hotDeals.summer} />
      </section>

      <Products />

      <div className="h-screen flex items-center mx-10">
        <HotDeals {...hotDeals.blackFriday} />
      </div>
        <Sponsors />
        <Footer />

    </div>
  );
};

export default Home;
