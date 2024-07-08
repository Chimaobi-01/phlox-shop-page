import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ProductDetailCardA from "../../components/ProductDetailCardA";
import iphone from "../../assets/iphone13.png";
import laptop from "../../assets/laptop.png";
import wristwatch from "../../assets/wristwatch.png";
import playstation from "../../assets/playstation.png";
import powerbank from "../../assets/powerbank.png";
import speaker from "../../assets/speaker.png";
import ProductDetailCardB from "../../components/ProductDetailCardB";

const Home = () => {
  const category = {
    phone: {
      bgColor: "#C33044",
      headingColor: "#E47882",
      tag: "enjoy",
      subHeading: "new",
      heading: "smartphones",
      itemImage: iphone,
      customImagePosition:"h-[70.66%] max-w-[66.66%] -top-[3.2rem] right-4"
    },
    gadgets: {
      bgColor: "#925C3A",
      headingColor: "#B4754E",
      tag: "new",
      subHeading: "wearable",
      heading: "gadgets",
      itemImage: wristwatch,
      customImagePosition:"h-[71.66%] max-w-[66.66%] -top-[3.3rem] -right-1 rotate-[24deg]"
    },
    laptops: {
      tag: "trending",
      subHeading: "devices",
      heading: "laptop",
      itemImage: laptop,
      customImagePosition:"scale-y-125 right-10 scale-x-110"
    },
    games: {
      tag: "best",
      subHeading: "gaming",
      heading: "console",
      itemImage: playstation,
      customImagePosition:"bottom-16 scale-y-110 right-6 "
    },
    charging: {
      bgColor: "#6C87A5",
      headingColor: "#B4CBE5",
      tag: "durable",
      subHeading: "charging",
      heading: "powerbank",
      itemImage: powerbank,
      customImagePosition:"h-[90.66%] max-w-[99.66%] -top-[5rem] right-0 scale-125 -rotate-[14deg]"
    },
    speaker: {
      bgColor: "#C33044",
      headingColor: "#D38D9C",
      tag: "quality",
      subHeading: "bluetooth",
      heading: "speakers",
      itemImage: speaker,
      customImagePosition:"h-[70.66%] max-w-[66.66%] -top-[1.5rem] -right-8 scale-125"
    },
  };

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
    </div>
  );
};

export default Home;
