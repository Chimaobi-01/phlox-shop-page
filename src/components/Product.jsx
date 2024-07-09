import cart from "../assets/shop-cart.svg";
import star from "../assets/star.png";

const Product = ({ price, title, rating, image }) => {
    price = price.toLocaleString();
    return (
        <li className="flex flex-col gap-1">
            <span className="h-3/4 rounded-[20px] relative bg-[#D9D9D9]">
                <img src={image} alt="" className="w-full h-full object-contain" />
                <span className="absolute bg-white top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-slate-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </span>
            </span>

            <div className="flex-1 flex items-center justify-between ">
                <p className="flex flex-col font-Montserrat text-[#101010] gap-1">
                    <span className="flex items-end mb-1 gap-0.5 font-medium text-sm text-[#000000CC]">
                        <img src={star} alt="star" className="w-6 h-6 shrink-0" />({rating}k
                        Reviews)
                    </span>
                    <span className="font-medium text-xl ">{title}</span>
                    <span className="font-semibold text-2xl"># {price}</span>
                </p>
                <span className="elipse w-14 h-14 rounded-full bg-[#D02335] flex items-center justify-center">
                    <img src={cart} alt="add to cart" className="shrink-0" />
                </span>
            </div>
        </li>
    );
};

export default Product;
