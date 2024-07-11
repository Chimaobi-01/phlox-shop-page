import headphone from "../assets/headphone.png";

const Hero = () => {
  return (
    <div className="hero min-h-screen lg:px-10 section-padding md:pt-0 pt-8">
      <div className=" lg:rounded-[3.8rem] md:rounded-[2.8rem] rounded-[1.8rem] flex flex-col gap-20 relative bg-[#C4C4C4] xl:p-20 lg:p-10 md:p-6 p-4 py-8">

        <header className="relative md:top-20 top-16">
          <h1 className="flex flex-col font-Poppins mb-6">
            <span className="font-medium lg:text-3xl md:text-2xl text-xl md:mb-4 mb-1">Beats by Dre</span>
            <span className=" font-bold lg:text-7xl md:text-6xl text-4xl">Wireless</span>
            <span className="font-Montserrat font-bold bold-display text-white ">
              HEADPHONES
            </span>
          </h1>
          <button className="md:py-5 py-4 md:px-10 px-8 bg-[#D02335E5] text-white md:rounded-[4rem] rounded-[3rem] flex items-center justify-center font-medium lg:text-xl md:text-base text-xs font-Montserrat">
            Shop by category
          </button>
        </header>


        <div className="description text-balance self-end lg:text-end text-start max-w-[33rem] font-Montserrat flex flex-col">
          <h2 className="md:text-lg text-sm font-semibold leading-8 my-2 text-end pe-3">Product Details</h2>
          <p className="lg:text-base md:text-sm text-xs font-light self-end lg:w-full md:w-[85%] w-[90%]">
          Beats by Dre remains a leader in premium headphones, leveraging its strong brand identity and association with music icons to target young, style-conscious consumers who prioritize a powerful, bass-forward sound for genres like hip-hop and pop..
          </p>
        </div>


        <div className=" absolute inset-0 z-10 flex items-start justify-center">
          <img
            src={headphone}
            alt="product image"
            className="rotate-[25deg] md:translate-x-20 translate-x-4  md:translate-y-8 object-cover xl:scale-125 md:scale-75 scale-[.65] lg:scale-110 relative xl:left-0 left-20 xl:bottom-0 lg:bottom-10 bottom-16"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
