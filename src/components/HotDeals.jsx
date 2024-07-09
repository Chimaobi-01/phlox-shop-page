
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
    <article
      style={{ backgroundColor: bgColor }}
      className="h-[30rem] rounded-[60px] flex justify-between items-center text-white relative"
    >

      <span className="absolute inset-0 flex justify-center">
        <img src={productImage} alt="hot deal" className={`relative ${positionImage}`} />
      </span>


      <h4 className="flex flex-col basis-[460px] font-Montserrat ps-16">
        <span className="font-normal text-4xl">20% off</span>
        <span className="font-extrabold uppercase text-9xl">{mainHeading}</span>
        <span className="font-normal text-4xl">{promoDate}</span>
      </h4>


      <div className="flex flex-col basis-[34%] px-12 gap-6">
        <p className="font-Poppins flex flex-col gap-6">
          <span className="font-medium text-xl">Beats Solo Air</span>
          <span className="font-bold text-4xl">{secondHeading}</span>
        </p>
        <p className="font-Montserrat font-normal text-lg">{description}</p>

        <button
          style={{ color: bgColor }}
          className="font-Montserrat bg-white py-5 px-10 rounded-[60px] font-medium text-xl w-36 self-start"
        >
          Shop
        </button>
      </div>

    </article>
  );
};

export default HotDeals;
