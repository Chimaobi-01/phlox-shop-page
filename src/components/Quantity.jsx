import { GiRoyalLove } from "react-icons/gi"

const Quantity = () => {
    return (
            <span className="flex-1 flex flex-col gap-2">
                <span className="flex h-16 text-3xl border-[#191919B2] border rounded-tl-xl rounded-bl-xl rounded-tr-xl rounded-br-xl">
                    <button className="flex-1 bg-[#E0E0E0] flex items-center justify-center rounded-tl-xl rounded-bl-xl">-</button>
                    <span className="flex-[1.2] flex items-center justify-center">1</span>
                    <button className="flex-1 bg-[#E0E0E0] flex items-center justify-center rounded-tr-xl rounded-br-xl">+</button>
                </span>
                <button className="text-[#618295] flex items-center tracking-wide justify-between px-3 uppercase font-Montserrat font-medium">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-slate-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                    add to wishlist
                </button>
            </span>
    )
}

export default Quantity