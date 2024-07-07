import headphone from "../assets/headphone.png";

const Hero = () => {
  return (
    <div className="hero min-h-screen mx-10 rounded-[3.8rem] p-20 flex flex-col gap-20 relative bg-[#C4C4C4]">
      <header>
        <h1 className="flex flex-col font-Poppins mb-6">
          <span className="font-medium text-4xl mb-4">Beats by Dre</span>
          <span className=" font-bold text-8xl">Wireless</span>
          <span className="font-Montserrat font-bold text-[11rem] text-white">
            HEADPHONES
          </span>
        </h1>
        <button className="py-5 px-10 bg-[#D02335E5] text-white rounded-[4rem] flex items-center justify-center font-medium text-xl font-Montserrat">
          Shop by category
        </button>
      </header>
      <div className="description self-end text-end w-full max-w-[31rem] font-Montserrat">
        <h2 className="text-lg font-semibold leading-8 my-2">Description</h2>
        <p className="text-base font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo.
        </p>
      </div>
      <div className="product-image absolute inset-0 z-10 flex items-start justify-center">
        <img
          src={headphone}
          alt="product image"
          className="rotate-[25deg] translate-x-20 translate-y-8 object-cover scale-125"
        />
      </div>
    </div>
  );
};

export default Hero;
