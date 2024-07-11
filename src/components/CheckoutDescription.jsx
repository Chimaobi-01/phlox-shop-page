import CheckoutQuantity from "./CheckoutQuantity"

const CheckoutDescription = () => {
    return (
        <div className="flex-1 flex gap-1.5 flex-wrap">
            <div className="flex-[75%] md:flex-[40%]">
                <div className=" font-bold flex flex-col mb-0.5 md:mb-1.5">
                    <span className="md:text-base xl:text-5xl text-xs leading-4">
                        iPhone 12 128GB ROM
                    </span>
                    <span className="text-[#A2A4A8] md:text-lg xl:text-3xl text-[10px]">#780,000</span>
                </div>
                <div className="description-and-review font-medium flex flex-col gap-1.5 md:gap-2.5">
                    <span className="flex items-center gap-1.5 text-[6px] md:text-[10px] xl:text-base">
                        <span>Brand:</span>
                        <span className="text-[#618295]">Apple | Similar products from Apple</span>
                    </span>
                    <p className='text-[6px] md:text-[10px] xl:text-base'>
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