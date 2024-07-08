const ProductDetailCardB = ({
  itemImage,
  tag,
  subHeading,
  heading,
  customImagePosition
}) => {
  return (
    <article
      style={{  boxShadow:'0 4 4 0 #B5B7BB40' }}
      className={`flex-[2] rounded-[3.75rem] bg-[#B5B7BB] relative grid grid-cols-2`}
    >
      <div className="flex-1 flex flex-col gap-6 self-center ps-6">
        <h2 className="flex flex-col gap-2 font-Poppins capitalize">
          <span className="font-normal text-xl ">{tag}</span>
          <span className="font-semibold text-4xl mb-2">{subHeading}</span>
          <span
            className="font-extrabold text-[#D5D9E1] text-6xl uppercase font-Montserrat"
          >
            {heading}
          </span>
        </h2>

        <button
          className="text-white rounded-[3rem] bg-[#D02335E5] py-4 px-10 flex items-center justify-center font-Montserrat font-semibold text-lg self-start"
        >
          Browse
        </button>
      </div>

      <img src={itemImage} alt="category image" className={`relative ${customImagePosition}`} />
    </article>
  );
};

export default ProductDetailCardB;
