import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitterSquare,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer = ({ showAllFooter, footerHeight }) => {
    return (
        <footer className={`${footerHeight} py-10 flex flex-col font-Montserrat`}>
            {
                showAllFooter && (
                    <div className="flex-1 flex md:items-center xl:items-start section-padding">
                        <div className="flex-[1.3] flex flex-col ">
                            <img src={logo} alt="logo" className="h-auto w-16 lg:w-28" />
                            <p className="font-normal italic text-[#9F9E9E] text-xs lg:text-base py-2">
                                Your one-stop shop for everything digital.
                            </p>
                            <ul className="socials flex items-center xl:justify-between xl:pe-10 gap-4 mt-[3vh]">
                                <li>
                                    <FaInstagram className="w-4 h-4 xl:w-8 xl:h-8" />
                                </li>
                                <li>
                                    <FaFacebookF className="w-4 h-4 xl:w-8 xl:h-8" />
                                </li>
                                <li>
                                    <FaLinkedinIn className="w-4 h-4 xl:w-8 xl:h-8" />
                                </li>
                                <li>
                                    <FaTwitterSquare className="w-4 h-4 xl:w-8 xl:h-8" />
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 text-xs lg:text-base ps-8 md:ps-0 xl:ps-16 flex flex-col gap-4">
                            <h6 className="font-bold ">Site Map</h6>
                            <ul className="flex flex-col gap-2">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">COntact</a></li>
                            </ul>
                        </div>
                        <div className="flex-[1.2] text-xs lg:text-base flex flex-col gap-2 md:pe-8">
                            <div className="flex flex-col gap-4">
                                <h6 className="font-bold">Contact</h6>
                                <address className="not-italic text-[8px] md:text-xs lg:text-base leading-tight">
                                    +234 900500000 1, Sherifat Daramola Street, Oba Akran Avenue,
                                    Ikeja.Lagos.
                                </address>
                            </div>
                            <h6 className="md:hidden font-bold capitalize text-[8px]">
                                suscribe to our email
                            </h6>
                        </div>
                        <div className="hidden md:flex flex-col gap-4 capitalize flex-[2]">
                            <h6 className="font-bold">Suscribe to our email</h6>
                            <p className="text-xl lg:text-2xl xl:text-4xl font-extrabold">for latest deals and offers</p>
                            <form className="relative flex xl:hidden">
                                <input type="text" placeholder="Enter your email"
                                    className="flex-1 rounded-[60px] h-10 bg-[#C4C4C4] placeholder:text-xs ps-8 focus:outline-none" />
                                <button className="absolute right-1 top-1 rounded-[30px] h-8 flex items-center justify-center font-medium text-white bg-[#D02335] px-4"
                                >suscribe</button>
                            </form>
                        </div>
                    </div>

                )
            }

            <div className="section-padding py-6 text-xs md:text-base  bg-black text-[#C4C4C4] flex items-center justify-between">
                <p>© 2022 Phlox Digital Shop.All Rights Reserved</p>
                <p>Privacy Policy . Term Condition</p>
            </div>
        </footer>
    );
};

export default Footer;
