

const ProccedToCheckout = () => {
    return (
        <div className="checkout flex-1 rounded-3xl bg-[#D9D9D9] flex flex-col gap-6 font-medium uppercase p-4">
            <h4 className=" text-2xl text-[#00000099]">cart summary</h4>
            <div className="flex items-center justify-between">
                <span className=" text-lg">2</span>
                <span className="font-bold text-3xl">#780,000</span>
            </div>
            <button className=" bg-[#D02335] py-4 uppercase rounded-2xl text-2xl text-[#F1F1F1]">
                procced to checkout
            </button>
        </div>
    )
}

export default ProccedToCheckout