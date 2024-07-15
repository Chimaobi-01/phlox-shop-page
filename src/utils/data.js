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
import CategoryCardA from "../components/CategoryCardA";
import CategoryCardB from "../components/CategoryCardB";
import HotDeals from "../components/HotDeals";
import Services from "../components/Services";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Categories from "../components/Categories";

const apiKey = import.meta.env.API_KEY;
const appId = import.meta.env.APP_ID;
const baseUrl = import.meta.env.BASE_URL;
const organizationId = import.meta.env.ORGANIZATION_ID;

export {
  Header,
  Hero,
  CategoryCardA,
  CategoryCardB,
  HotDeals,
  Services,
  Products,
  Footer,
  Categories,
  apiKey,
  appId,
  baseUrl,
  organizationId
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
      "h-[65.66%] max-w-[66.66%] xl:scale-100 scale-110 xl:-top-[3.5rem] -top-[2.6rem] xl:-right-1 right-2 rotate-[24deg]",
  },
  laptops: {
    tag: "trending",
    subHeading: "devices",
    heading: "laptop",
    itemImage: laptop,
    customImagePosition:
      "xl:scale-y-125 scale-y-100 right-6 xl:scale-x-110 scale-x-100 xl:top-0 -top-[3rem]",
  },
  games: {
    tag: "best",
    subHeading: "gaming",
    heading: "console",
    itemImage: playstation,
    customImagePosition:
      "md:bottom-[7rem] bottom-[4rem] lg:scale-x-105 lg:scale-y-100 scale-y-[.85] lg:right-0 md:right-10 right-0 ",
    positionDiv: "relative md:bottom-[5rem]",
    changeItemPosition: "gameCard",
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
    changeItemPosition: "charger",
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
    changeItemPosition: "speaker",
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
    positionImage:
      "-translate-y-20 lg:-translate-y-32 xl:-translate-y-40 scale-125 ",
  },
  blackFriday: {
    mainHeading: "mega deals",
    promoDate: "15 Nov to 13  Dec",
    secondHeading: "Black Friday Sale",
    description:
      "Detty December don reach! Get all the latest tech at mega discounts.",
    productImage: greenWristWatch,
    bgColor: "#3C6351",
    positionImage: "-translate-y-16 xl:-translate-y-24 scale-110 ",
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
    price: 918739,
    title: "Samsung 55inch Ultra HD",
    rating: 28,
    image: ledTv,
  },
];
