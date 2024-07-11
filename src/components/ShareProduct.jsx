import facebook from "../assets/fb-social.svg";
import instagram from "../assets/instagram-social.svg";
import whatsapp from "../assets/whatsapp-social.svg";


const ShareProduct = () => {
    return (
        <span className="hidden md:flex flex-col gap-2 font-medium lg:text-xl text-base text-[#10101099] uppercase">
            share this product
            <ul className="flex items-center gap-4">
                <li className="p-1.5 border-[#101010] rounded-full border flex items-center justify-center"><img src={facebook} alt="" className="shrink-0 w-6 h-6" /></li>
                <li className="p-1.5 border-[#101010] rounded-full border flex items-center justify-center"><img src={instagram} alt="" className="shrink-0 w-6 h-6" /></li>
                <li className="p-1.5 border-[#101010] rounded-full border flex items-center justify-center"><img src={whatsapp} alt="" className="shrink-0 w-6 h-6" /></li>
            </ul>
        </span>
    )
}

export default ShareProduct