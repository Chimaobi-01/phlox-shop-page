import React from 'react'

const CheckoutQuantity = ({ item, handleDecreaseQuantity, handleIncreaseQuantity }) => {
    return (
        <div className="flex-1 flex flex-col md:basis-32 lg:basis-44 xl:basis-56 md:self-center relative right-2 top-1">
            <span className="flex md:text-2xl text-sm border-[#19191971] border rounded-tl-xl md:rounded-tl-2xl rounded-bl-xl md:rounded-bl-2xl rounded-tr-xl md:rounded-tr-2xl rounded-br-xl md:rounded-br-2xl">
                <button onClick={()=> handleDecreaseQuantity(item.id)} className="flex-1 bg-[#E0E0E0] flex items-center justify-center rounded-tl-xl rounded-bl-xl">-</button>
                <span className="flex-[1.2] flex items-center justify-center md:py-1">{item.quantity}</span>
                <button onClick={()=> handleIncreaseQuantity(item.id)} className="flex-1 bg-[#E0E0E0] flex items-center justify-center rounded-tr-xl rounded-br-xl">+</button>
            </span>
            <button className="text-[#618295] md:flex items-center tracking-wide gap-2 uppercase font-Montserrat font-medium text-[6px] md:text-[10px] lg:text-sm hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="lg:w-7 lg:h-7 w-3.5 h-3.5 stroke-slate-500"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                </svg>
                add to wishlist
            </button>
        </div>
    )
}

export default CheckoutQuantity