import { useNavigate } from "react-router-dom"


const ProccedToCheckout = ({ item }) => {
    const navigate = useNavigate()
    const total = item.quantity * (item.current_price[0].NGN[0] ?? item.current_price)

    const goToCheckout = () => {
        navigate('/checkout')
    }


    return (
        <div className="basis-[97px] md:basis-[185px] xl:basis-[500px] rounded-[10px] xl:rounded-[20px] bg-[#D9D9D9] flex flex-col gap-4 xl:gap-6 p-1.5 font-medium uppercase lg:p-3 xl:p-4">
            <h4 className=" text-[8px] md:text-xs lg:text-sm xl:text-2xl text-[#00000099]">cart summary</h4>
            <div className="flex flex-col xl:gap-4">
                <div className="flex items-center justify-between mb-1">
                    <span className=" text-[6px] md:text-[8px] lg:text-[10px] xl:text-lg">Total</span>
                    <span className="font-bold text-[10px] md:text-xs lg:text-sm xl:text-3xl">NGN{total.toLocaleString()}</span>
                </div>
                <button onClick={goToCheckout}
                 className=" bg-[#D02335] p-2 uppercase rounded-xl xl:rounded-[20px] text-[8px] md:text-base xl:text-2xl text-[#F1F1F1] line-clamp-1 xl:py-3">
                     checkout
                </button>
            </div>
        </div>
    )
}

export default ProccedToCheckout
