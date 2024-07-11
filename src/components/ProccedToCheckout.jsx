

const ProccedToCheckout = () => {
    return (
        <div className="basis-[97px] md:basis-[185px] rounded-[10px] bg-[#D9D9D9] flex flex-col p-1.5 font-medium uppercase">
            <h4 className=" text-[8px] md:text-xs text-[#00000099] mb-auto mt-4">cart summary</h4>
            <div className="flex items-center justify-between mb-1">
                <span className=" text-[6px] md:text-[8px]">Total</span>
                <span className="font-bold text-[10px] md:text-xs">#780,000</span>
            </div>
            <button className=" bg-[#D02335] p-2 uppercase rounded-xl text-[8px] md:text-base text-[#F1F1F1]">
               add to cart
            </button>
        </div>
    )
}

export default ProccedToCheckout