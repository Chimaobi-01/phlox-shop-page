const CategoryCardB = ({
  itemImage,
  tag,
  subHeading,
  heading,
  customImagePosition,
  positionDiv,
}) => {
  return (
    <article
      style={{  boxShadow:'0 4 4 0 #B5B7BB40' }}
      className={`wide-item md:rounded-[3.75rem] rounded-[20px] bg-[#B5B7BB] relative grid grid-cols-2`}
    >
      <div className={`flex-1 flex flex-col md:gap-6 self-center md:ps-6 ps-4 ${positionDiv}`}>

        <h2 className="flex flex-col md:gap-2 md:mb-0 mb-2 font-Poppins capitalize">
          <span className="font-normal md:text-xl text-xs ">{tag}</span>
          <span className="font-semibold md:text-4xl md:mb-2">{subHeading}</span>
          <span
            className="font-extrabold text-[#D5D9E1] md:text-5xl text-3xl uppercase font-Montserrat"
          >
            {heading}
          </span>
        </h2>

        <button
          className="text-white rounded-[3rem] bg-[#D02335E5] md:py-4 py-2 md:px-10 px-5 flex items-center justify-center font-Montserrat font-semibold md:text-lg text-sm self-start"
        >
          Browse
        </button>
      </div>

      <img src={itemImage} alt="category image" className={`relative ${customImagePosition}`} />
    </article>
  );
};

export default CategoryCardB;
