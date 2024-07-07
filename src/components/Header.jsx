import Search from "./Search"
import logo from '../assets/logo.jpg'
import cart from '../assets/cart.svg'

const Header = () => {
  return (
    <header className="flex gap-8 p-10 font-Montserrat">
        <img src={logo} alt="phlox" />
        <nav className="flex justify-between flex-1">
            <ul className="flex gap-8 font-thin text-base">
                <li>
                    <a href="#" className="text-[#C4C4C4] hover:text-black">Home</a>
                </li>
                <li>
                    <a href="#" className="text-[#C4C4C4] hover:text-black">Shop</a>
                </li>
                <li>
                    <a href="#" className="text-[#C4C4C4] hover:text-black">About Us</a>
                </li>
                <li>
                    <a href="#" className="text-[#C4C4C4] hover:text-black">Blog</a>
                </li>
                <li>
                    <a href="#" className="text-[#C4C4C4] hover:text-black">Contact Us</a>
                </li>
            </ul>

            <ul className="flex items-center gap-9 ml-auto">
                <li>
                    <a href="#">Login</a>
                </li>
                <li>
                    <a href="#">Sign Up</a>
                </li>
                <li className="relative">
                    <span className="elipse absolute w-2.5 h-2.5 rounded-full text-[5px] flex justify-center items-center bg-[#F42C36E5] top-0 left-0 text-white">0</span>
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