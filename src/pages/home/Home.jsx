import HotDeals from "../../components/HotDeals";
import Services from "../../components/Services";
import { category, Header, Hero, hotDeals, ProductDetailCardA, ProductDetailCardB } from "../../utils/data";



const Home = () => {
 
  return (
    <div>
      <Header />
      <Hero />
      <section className="min-h-screen m-10 my-24 flex flex-col justify-between gap-24">
        <div className=" gap-6 flex h-[400px]">
          <ProductDetailCardA {...category.phone} />
          <ProductDetailCardA {...category.gadgets} />
          <ProductDetailCardB {...category.laptops} />
        </div>

        <div className=" gap-6 flex h-[400px]">
          <ProductDetailCardB {...category.games} />
          <ProductDetailCardA {...category.charging} />
          <ProductDetailCardA {...category.speaker} />
        </div>
      </section>

      <section className="min-h-screen  m-10 my-24 flex flex-col justify-between overflow-hidden">
        <Services />
        <HotDeals {...hotDeals.summer}/>
      </section>
    </div>
  );
};

export default Home;
