import CheckoutQuantity from "./CheckoutQuantity"
import star from '../assets/star.png'

const CheckoutDescription = ({ item, handleDecreaseQuantity, handleIncreaseQuantity }) => {
    const price = item.current_price[0].NGN[0] ?? item.current_price
    return (
        <div className="basis-3/4 xl:basis-4/6 flex gap-1.5 md:gap-6 xl:gap-16 ps-2 ms-2 xl:ps-6 xl:ms-6 border-l-2 ">
            <div className="basis-[75%] sm:basis-[60%]">
                <div className=" font-bold flex flex-col mb-0.5 md:mb-1.5">
                    <span className="md:text-base lg:text-3xl text-xs leading-4 line-clamp-1">
                        {item.name}
                    </span>
                    <span className="text-[#A2A4A8] md:text-lg lg:text-xl text-[10px]">NGN{price.toLocaleString()}</span>
                </div>
                <div className="description-and-review font-medium flex flex-col gap-1.5 md:gap-2.5">
                    <span className="flex items-center gap-1.5 text-[6px] md:text-[10px] lg:text-sm">
                        <span>Brand:</span>
                        <span className="text-[#618295]">Apple | Similar products from Apple</span>
                    </span>
                    <span className="lg:flex hidden items-center gap-1 text-[6px] md:text-sm xl:text-base">
                        <ul className="stars flex">
                            {
                                [1, 2, 3, 4, 5].map(i => (
                                    <li key={i}><img src={star} alt="star" className="md:w-4 md:h-4 w-2.5 h-2.5" /></li>
                                ))
                            }
                        </ul>
                        <span>(11.k Reviews)</span>
                    </span>
                    <p className='text-[6px] md:text-[10px] lg:text-base line-clamp-4'>
                       {item.description}
                        <button className='font-medium'>See More</button>
                    </p>
                </div>
            </div>

            <CheckoutQuantity
                item={item}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
            />

        </div>
    )
}

export default CheckoutDescription