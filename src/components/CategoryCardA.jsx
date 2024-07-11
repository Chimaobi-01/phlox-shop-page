const CategoryCardA = ({
  itemImage,
  tag,
  subHeading,
  heading,
  bgColor,
  headingColor,
  customImagePosition,
}) => {
  return (
    <article
      style={{ backgroundColor: bgColor, boxShadow:`0 4 4 0 ${`${bgColor}40`}` }}
      className={` flex md:items-end items-center  lg:rounded-[3.75rem] md:rounded-[2.75rem] rounded-[20px] md:px-6 px-2 md:pb-10 relative`}
    >
      <img src={itemImage} alt="category image" className={`absolute ${customImagePosition}`} />

      <div className="flex flex-col md:gap-6 relative md:top-0 top-6">
        <h2 className="flex flex-col md:gap-2 text-white font-Poppins capitalize">
          <span className="font-normal md:text-base text-[8px] ">{tag}</span>
          <span className="font-semibold md:text-3xl text-base md:mb-2 mb-0">{subHeading}</span>
          <span
            style={{ color: headingColor }}
            className="font-extrabold md:text-3xl text-[min(1.25rem, 3.5vw)] uppercase font-Montserrat"
          >
            {heading}
          </span>
        </h2>

        <button
          className="text-white rounded-[3rem] bg-[#35363A] md:py-4 py-2 md:px-8 px-4 flex items-center justify-center font-Montserrat font-semibold md:text-lg text-[8px] self-start"
        >
          Browse
        </button>
      </div>
    </article>
  );
};

export default CategoryCardA;
