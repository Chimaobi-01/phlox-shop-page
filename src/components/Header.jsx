import Search from "./Search"
import logo from '../assets/logo.jpg'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import CartIcon from "./CartIcon"
import search from '../assets/search.svg'


const Header = ({ showNav }) => {
    const [isActive, setIsActive] = useState('')
    const navigate = useNavigate()

    const toggleMenu = () => {
        if (isActive === 'active') {
            setIsActive('')
        } else {
            setIsActive('active')
        }
    }

    const goToHome = () => {
        navigate('/')
    }


    return (
        <header className="flex items-center gap-8 lg:p-10 py-10 md:px-6 px-4 font-Montserrat md:border-none border-b-2 border-[#B5B7BB80]">

            <img onClick={goToHome} src={logo} alt="phlox" className="shrink-0 cursor-pointer" />

            <nav className="flex items-center  lg:justify-between flex-1">
                {
                    showNav && (
                        <ul className="md:flex hidden lg:gap-8 gap-4 font-normal lg:text-base text-sm">
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

                <ul className="flex items-center lg:gap-9 gap-4 ml-auto">
                    <li className="hidden xl:inline">
                        <a href="#">Login</a>
                    </li>
                    <li className="hidden xl:inline">
                        <a href="#">Sign Up</a>
                    </li>
                    <li className="hidden xl:inline">
                        <CartIcon />
                    </li>
                    {/* <li>
                    <img src={search} alt="search" className='' />
                    </li> */}
                    <li className="">
                        <Search />
                    </li>
                    <li onClick={toggleMenu} className={`menu ${isActive} md:bg-[#B5B7BB] lg:hidden`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header