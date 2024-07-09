import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitterSquare,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer = () => {
    return (
        <footer className="min-h-[70vh] flex flex-col font-Montserrat">
            <div className="flex-1 flex">
                <div className="flex-1 flex flex-col p-10">
                    <div className="w-1/2 ">
                        <img src={logo} alt="logo" className="w-28 h-auto" />
                        <p className="font-normal italic text-[#9F9E9E] mt-3 mb-16">
                            Your one-stop shop for everything digital.
                        </p>
                        <ul className="socials flex items-center justify-between gap-4">
                            <li>
                                <FaFacebookF size={20} />
                            </li>
                            <li>
                                <FaInstagram size={20} />
                            </li>
                            <li>
                                <FaLinkedinIn size={20} />
                            </li>
                            <li>
                                <FaTwitterSquare size={20} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-2 p-10">
                    <div>
                        <h6 className="font-bold mb-6">Site Map</h6>
                        <ul className="">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">COntact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-bold mb-6">Contact</h6>
                        <address className="not-italic">
                            +234 900500000 1, Sherifat Daramola Street, Oba Akran Avenue,
                            Ikeja.Lagos.
                        </address>
                    </div>
                </div>
                <div className="flex-1 p-10">
                    <h6 className="font-bold mb-6 capitalize">suscribe to our email</h6>
                    <p className="font-bold w-5/6 text-4xl">
                        For Latest Deals and Offers
                    </p>
                </div>
            </div>

            <div className="px-10 py-6 bg-black text-[#C4C4C4] flex items-center justify-between">
                <p>© 2022 Phlox Digital Shop.All Rights Reserved</p>
                <p>Privacy Policy . Term Condition</p>
            </div>
        </footer>
    );
};

export default Footer;
