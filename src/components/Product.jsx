
import cart from "../assets/shop-cart.svg";
import star from "../assets/star.png";
import { useNavigate } from 'react-router-dom';
import { useCart } from "../services/CartContext";

const Product = ({ name, photos, current_price, id, description }) => {
    let price = current_price[0].NGN[0].toLocaleString();
    const image = `https://api.timbu.cloud/images/${photos[0]?.url}`
    const navigate = useNavigate()
    const { addToCart } = useCart();
    const product = {
        name,
        current_price,
        photos,
        id,
        description
    }



    const goToProductDetailPage = (passid) => {
        navigate(`/product/${passid}`)
    }
    const handleAddToCart = () => {
        navigate('/cart')
        addToCart(product);
    }

    return (
        <li className="flex flex-col">
            <div onClick={()=>goToProductDetailPage(id)} className="h-28 md:h-40 xl:h-80 xl:p-2 p-1.5 cursor-pointer rounded-2xl xl:rounded-[20px] relative bg-[#D9D9D9]">
                <img src={image} alt="" className="w-full h-full object-contain" />
                <span className="absolute bg-white top-2 right-2 xl:top-3 xl:right-3 xl:h-10 xl:w-10 h-6 w-6 rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 xl:w-6 xl:h-6 stroke-slate-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </span>
            </div>

            <div className="flex-1 flex items-center gap-0.5 md:gap-1 xl:mt-2">
                <p className="flex-1 flex flex-col font-Montserrat text-[#101010]">
                    <span className="flex items-end font-medium xl:text-sm md:text-[10px] text-[6px] text-[#000000CC]">
                        <img src={star} alt="star" className="md:w-4 md:h-4 h-3 w-3 shrink-0" />(20.8k
                        Reviews)
                    </span>
                    <span className="font-medium xl:text-xl md:text-xs text-[8px]">{name}</span>
                    <span className="font-semibold xl:text-2xl md:text-sm text-xs">NGN{price}</span>
                </p>
                <span onClick={handleAddToCart} className="elipse cursor-pointer xl:w-14 xl:h-14 md:w-8 md:h-8 w-7 h-7 rounded-full bg-[#D02335] flex items-center justify-center shrink-0">
                    <img src={cart} alt="add to cart" className="shrink-0 xl:w-auto xl:h-auto md:w-4 md:h-4 w-3.5 h-3.5" />
                </span>
            </div>
        </li>
    );
};

export default Product;
