import iphone from "../assets/iphone13.png";
import laptop from "../assets/laptop.png";
import wristwatch from "../assets/wristwatch.png";
import playstation from "../assets/playstation.png";
import powerbank from "../assets/powerbank.png";
import speaker from "../assets/speaker.png";
import support from "../assets/support.svg";
import verified from "../assets/verified.svg";
import shipping from "../assets/shipping.svg";
import secure from "../assets/secure.svg";

import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductDetailCardA from "../components/ProductDetailCardA";
import ProductDetailCardB from "../components/ProductDetailCardB";

export { Header, Hero, ProductDetailCardA, ProductDetailCardB };

export const category = {
  phone: {
    bgColor: "#C33044",
    headingColor: "#E47882",
    tag: "enjoy",
    subHeading: "new",
    heading: "smartphones",
    itemImage: iphone,
    customImagePosition: "h-[70.66%] max-w-[66.66%] -top-[3.2rem] right-4",
  },
  gadgets: {
    bgColor: "#925C3A",
    headingColor: "#B4754E",
    tag: "new",
    subHeading: "wearable",
    heading: "gadgets",
    itemImage: wristwatch,
    customImagePosition:
      "h-[71.66%] max-w-[66.66%] -top-[3.3rem] -right-1 rotate-[24deg]",
  },
  laptops: {
    tag: "trending",
    subHeading: "devices",
    heading: "laptop",
    itemImage: laptop,
    customImagePosition: "scale-y-125 right-10 scale-x-110",
  },
  games: {
    tag: "best",
    subHeading: "gaming",
    heading: "console",
    itemImage: playstation,
    customImagePosition: "bottom-16 scale-y-110 right-6 ",
  },
  charging: {
    bgColor: "#6C87A5",
    headingColor: "#B4CBE5",
    tag: "durable",
    subHeading: "charging",
    heading: "powerbank",
    itemImage: powerbank,
    customImagePosition:
      "h-[90.66%] max-w-[99.66%] -top-[5rem] right-0 scale-125 -rotate-[14deg]",
  },
  speaker: {
    bgColor: "#C33044",
    headingColor: "#D38D9C",
    tag: "quality",
    subHeading: "bluetooth",
    heading: "speakers",
    itemImage: speaker,
    customImagePosition:
      "h-[70.66%] max-w-[66.66%] -top-[1.5rem] right-0 scale-125",
  },
};

export const services = [
  {
    icon: shipping,
    heading: "Free Shipping",
    subheading: "Free Shipping On All Order",
  },
  {
    icon: verified,
    heading: "Refund Guarantee",
    subheading: "30 Days Pay Back",
  },
  {
    icon: support,
    heading: "Online Support 24/7",
    subheading: "Technical Support",
  },
  {
    icon: secure,
    heading: "Secure Payment",
    subheading: "All Cards Accepted",
  },
];

export const hotDeals = {
  summer: {
    mainHeading: "hot sales",
    promoDate: "15 March - 16  April",
    secondHeading: "Summer Sale",
    description: "No wahala for summer heat. Jam to your favorite beats with our headphone discount sale.",
    bgColor:"#C33044"
  },
  blackFriday: {
    mainHeading: "",
    promoDate: "",
    secondHeading: "",
    description: "",
  },
};
