
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
    <div className="overflow-hidden">
      <Header showNav={true} />
      <Hero />
      <Categories />
      <Services />
      <HotDeals {...hotDeals.summer} />
      <Products />
      <HotDeals {...hotDeals.blackFriday} />
      <Sponsors />
      <Footer showAllFooter={true} footerHeight={"md:h-screen lg:h-[calc(100vh-200px)]"} />
    </div>
  );
};

export default Home;
