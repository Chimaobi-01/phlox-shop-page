import CheckoutQuantity from "./CheckoutQuantity"
import star from '../assets/star.png'

const CheckoutDescription = () => {
    return (
        <div className="flex-1 flex gap-1.5 md:gap-6 xl:gap-16 flex-wrap">
            <div className="flex-[75%] md:flex-[40%]">
                <div className=" font-bold flex flex-col mb-0.5 md:mb-1.5">
                    <span className="md:text-base lg:text-3xl text-xs leading-4">
                        iPhone 12 128GB ROM
                    </span>
                    <span className="text-[#A2A4A8] md:text-lg lg:text-xl text-[10px]">#780,000</span>
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
                    <p className='text-[6px] md:text-[10px] lg:text-base'>
                        Speed. 5G. Supercharged CreativityExperience the future.
                        iPhone 12. Ultrafast. Ultra capable.
                        <button className='font-medium'>See More</button>
                    </p>
                </div>
            </div>

            <CheckoutQuantity />

        </div>
    )
}

export default CheckoutDescription