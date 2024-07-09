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
import drone from "../assets/drone.png";
import vrg from "../assets/vrg.png";
import ledTv from "../assets/ledTv.png";
import camera from "../assets/camera.png";
import nokia from "../assets/nokia.png";
import iphoneNew from "../assets/iphoneNew.png";
import earpiece from "../assets/earpiece.png";
import laptopGold from "../assets/laptopGold.png";
import greenWristWatch from "../assets/greenWristWatch.png";
import hotHeadphone2 from "../assets/hot-headphone2.png";


import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductDetailCardA from "../components/ProductDetailCardA";
import ProductDetailCardB from "../components/ProductDetailCardB";
import HotDeals from "../components/HotDeals";
import Services from "../components/Services";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Categories from "../components/Categories";


export {
  Header,
  Hero,
  ProductDetailCardA,
  ProductDetailCardB,
  HotDeals,
  Services,
  Products,
  Footer,
  Categories
};

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
      "h-[65.66%] max-w-[66.66%] -top-[3.5rem] -right-1 rotate-[24deg]",
  },
  laptops: {
    tag: "trending",
    subHeading: "devices",
    heading: "laptop",
    itemImage: laptop,
    customImagePosition: "scale-y-125 right-6 scale-x-110",
  },
  games: {
    tag: "best",
    subHeading: "gaming",
    heading: "console",
    itemImage: playstation,
    customImagePosition: "bottom-12 scale-x-105 scale-y-125 right-0 ",
  },
  charging: {
    bgColor: "#6C87A5",
    headingColor: "#B4CBE5",
    tag: "durable",
    subHeading: "charging",
    heading: "powerbank",
    itemImage: powerbank,
    customImagePosition:
      "h-[90.66%] w-full -top-[5rem] -right-4 scale-125 -rotate-[14deg]",
  },
  speaker: {
    bgColor: "#C33044",
    headingColor: "#D38D9C",
    tag: "quality",
    subHeading: "bluetooth",
    heading: "speakers",
    itemImage: speaker,
    customImagePosition:
      "h-[70.66%] max-w-[66.66%] -top-[2rem] -right-2 scale-110",
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
    description:
      "No wahala for summer heat. Jam to your favorite beats with our headphone discount sale.",
    bgColor: "#C33044",
    productImage: hotHeadphone2,
    positionImage: "bottom-36 scale-150 right-8",
  },
  blackFriday: {
    mainHeading: "mega deals",
    promoDate: "15 Nov to 13  Dec",
    secondHeading: "Black Friday Sale",
    description:
      "Detty December don reach! Get all the latest tech at mega discounts.",
    productImage: greenWristWatch,
    bgColor: "#3C6351",
    positionImage: "bottom-24 scale-125 -right-2",
  },
};

export const products = [
  {
    id: 1,
    price: 77600,
    title: "New S150 Adjustable Drone",
    rating: 11.6,
    image: drone,
  },
  {
    id: 2,
    price: 45000,
    title: "Oculus Quest 2 VR",
    rating: 2.4,
    image: vrg,
  },
  {
    id: 3,
    price: 918739,
    title: "Samsung 55inch Ultra HD",
    rating: 28,
    image: ledTv,
  },
  {
    id: 4,
    price: 350000,
    title: "Canon 550D  Digital Camera",
    rating: 4,
    image: camera,
  },
  {
    id: 5,
    price: 60500,
    title: "Nokia Phone",
    rating: 1.6,
    image: nokia,
  },
  {
    id: 6,
    price: 419000,
    title: "iPhone 12 128GB ROM",
    rating: 30,
    image: iphoneNew,
  },
  {
    id: 7,
    price: 8500,
    title: "Samsung Earphone",
    rating: 1,
    image: earpiece,
  },
  {
    id: 8,
    price: 630000,
    title: "iPad Pro 9.7 inch",
    rating: 80,
    image: laptopGold,
  },
];

export const relatedProducts = [
  {
    id: 1,
    price: 77600,
    title: "New S150 Adjustable Drone",
    rating: 11.6,
    image: drone,
  },
  {
    id: 2,
    price: 45000,
    title: "Oculus Quest 2 VR",
    rating: 2.4,
    image: vrg,
  },
  {
    id: 3,
    price: 918739,
    title: "Samsung 55inch Ultra HD",
    rating: 28,
    image: ledTv,
  },
  {
    id: 4,
    price: 350000,
    title: "Canon 550D  Digital Camera",
    rating: 4,
    image: camera,
  }
];
