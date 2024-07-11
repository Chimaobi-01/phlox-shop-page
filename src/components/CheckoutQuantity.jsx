import React from 'react'

const CheckoutQuantity = () => {
    return (
        <span className=" flex flex-col basis-28">
            <span className="flex md:text-2xl text-sm border-[#19191971] border rounded-tl-xl md:rounded-tl-2xl rounded-bl-xl md:rounded-bl-2xl rounded-tr-xl md:rounded-tr-2xl rounded-br-xl md:rounded-br-2xl">
                <button className="flex-1 bg-[#E0E0E0] flex items-center justify-center rounded-tl-xl rounded-bl-xl">-</button>
                <span className="flex-[1.2] flex items-center justify-center md:py-1">1</span>
                <button className="flex-1 bg-[#E0E0E0] flex items-center justify-center rounded-tr-xl rounded-br-xl">+</button>
            </span>
           
        </span>
    )
}

export default CheckoutQuantity