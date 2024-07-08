const ProductDetailCardA = ({
  itemImage,
  tag,
  subHeading,
  heading,
  bgColor,
  headingColor,
  customImagePosition
}) => {
  return (
    <article
      style={{ backgroundColor: bgColor, boxShadow:`0 4 4 0 ${`${bgColor}40`}` }}
      className={`flex-1 flex items-end rounded-[3.75rem] px-6 pb-10 relative`}
    >
      <img src={itemImage} alt="category image" className={`absolute ${customImagePosition}`} />

      <div className="flex flex-col gap-6">
        <h2 className="flex flex-col gap-2 text-white font-Poppins capitalize">
          <span className="font-normal text-base ">{tag}</span>
          <span className="font-semibold text-3xl mb-2">{subHeading}</span>
          <span
            style={{ color: headingColor }}
            className="font-extrabold text-4xl uppercase font-Montserrat"
          >
            {heading}
          </span>
        </h2>

        <button
          className="text-white rounded-[3rem] bg-[#35363A] py-4 px-8 flex items-center justify-center font-Montserrat font-semibold text-lg self-start"
        >
          Browse
        </button>
      </div>
    </article>
  );
};

export default ProductDetailCardA;
