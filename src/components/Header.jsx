import Search from "./Search"
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.svg'
import { Link } from "react-router-dom"

const Header = ({showNav}) => {
    return (
        <header className="flex gap-8 p-10 font-Montserrat">
           <Link to={'/'}> <img src={logo} alt="phlox" /></Link>


            <nav className="flex justify-between flex-1">
                {
                    showNav && (
                        <ul className="flex gap-8 font-normal text-base">
                            <li>
                                <a href="#" className="text-[#C4C4C4] hover:text-black focus:text-black ">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C4C4C4] hover:text-black focus:text-black ">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C4C4C4] hover:text-black focus:text-black ">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C4C4C4] hover:text-black focus:text-black ">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#C4C4C4] hover:text-black focus:text-black ">Contact Us</a>
                            </li>
                        </ul>

                    )
                }

                <ul className="flex items-center gap-9 ml-auto">
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Sign Up</a>
                    </li>
                    <li className="relative">
                        <span className="elipse absolute w-4 h-4 rounded-full text-xs font-medium flex justify-center items-center bg-[#F42C36E5] -top-1 -left-0.5 text-white">0</span>
                        <a href="#"><img src={cart} alt="cart logo" /></a>
                    </li>
                    <li>
                        <Search />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header