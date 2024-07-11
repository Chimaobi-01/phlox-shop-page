import cart from '../assets/cart.svg'
import { useNavigate } from "react-router-dom"

const CartIcon = () => {
    const navigate = useNavigate()

    const goToCart = () => {
        navigate('/cart')
    }

    return (
        <span onClick={goToCart} className="relative">
            <span className="elipse absolute w-4 h-4 rounded-full text-xs font-medium flex justify-center items-center bg-[#F42C36E5] -top-1 -left-0.5 text-white">
                0
            </span>
            <a href="#"><img src={cart} alt="cart logo" /></a>
        </span>
    )
}

export default CartIcon