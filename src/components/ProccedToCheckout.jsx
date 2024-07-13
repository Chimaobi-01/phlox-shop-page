

const ProccedToCheckout = ({ item }) => {
    const total = item.quantity * item.current_price[0].NGN[0]
    return (
        <div className="basis-[97px] max-h-32 md:basis-[185px] xl:basis-[300px] rounded-[10px] bg-[#D9D9D9] flex flex-col p-1.5 font-medium uppercase lg:p-3">
            <h4 className=" text-[8px] md:text-xs lg:text-sm xl:text-2xl text-[#00000099] mb-auto mt-4">cart summary</h4>
            <div className="flex items-center justify-between mb-1">
                <span className=" text-[6px] md:text-[8px] lg:text-[10px] xl:text-lg">Total</span>
                <span className="font-bold text-[10px] md:text-xs lg:text-sm xl:text-3xl">NGN{total.toLocaleString()}</span>
            </div>
            <button className=" bg-[#D02335] p-2 uppercase rounded-xl text-[8px] md:text-base xl:text-2xl text-[#F1F1F1]">
               checkout
            </button>
        </div>
    )
}

export default ProccedToCheckout
