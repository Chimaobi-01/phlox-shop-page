
const HotDeals = ({
  mainHeading,
  promoDate,
  secondHeading,
  description,
  bgColor,
  productImage,
  positionImage
}) => {
  return (
    <div className="md:h-[calc(100vh-100px)] py-24 md:py-0 flex items-center justify-center section-padding">
      <article
        style={{ backgroundColor: bgColor }}
        className=" md:rounded-[40px] lg:rounded-[60px] rounded-[20px] w-full h-1/2 md:h-3/4 xl:h-5/6 flex justify-between items-center text-white relative px-4 py-8 xl:px-0 xl:py-0"
      >
        {/* image */}
        <span className="absolute inset-0 flex justify-center">
          <img src={productImage} alt="hot deal" className={`relative ${positionImage}`} />
        </span>

        {/* left side */}
        <h4 className="basis-[25%] md:basis-[45%] xl:basis-[30%] flex flex-col font-Montserrat md:text-xl xl:text-2xl gap-2 xl:gap-6 text-xs font-normal md:ps-4 lg:ps-10 xl:ps-16">
          <span >20% off</span>
          <span className="font-extrabold uppercase md:text-7xl xl:textext-9xl text-4xl">{mainHeading}</span>
          <span >{promoDate}</span>
        </h4>

        {/* right side */}
        <div className="basis-[25%] md:basis-[40%] lg:basis-[35%] xl:basis-[40%] flex flex-col gap-3 xl:gap-6 md:ps-4 lg:ps-10 ">
          <p className="font-Poppins flex flex-col gap-2">
            <span className="font-medium md:text-sm xl:text-xl text-[6px]">Beats Solo Air</span>
            <span className="font-bold text-[10px] xl:text-5xl md:text-3xl">{secondHeading}</span>
          </p>
          <p className="font-Montserrat font-normal md:text-sm xl:text-xl text-[6px]">{description}</p>

          <button
            style={{ color: bgColor }}
            className="font-Montserrat bg-white rounded-[20px] font-medium text-[8px] xl:text-xl md:text-base self-start px-3 py-1 md:py-2 md:px-6"
          >
            Shop
          </button>
        </div>

      </article>
    </div>

  );
};

export default HotDeals;
