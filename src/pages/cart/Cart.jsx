import Footer from "../../components/Footer"
import Header from "../../components/Header"
import RelatedProducts from "../../components/RelatedProducts"
import phone from '../../assets/iphoneNew.png'
import ProccedToCheckout from "../../components/ProccedToCheckout"
import CheckoutDescription from "../../components/CheckoutDescription"
import { useCart } from "../../services/CartContext"
import { useEffect, useState } from "react"
import { MdDeleteOutline } from "react-icons/md"


const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    const handleIncreaseQuantity = (productId) => {
        increaseQuantity(productId);
    };

    const handleDecreaseQuantity = (productId) => {
        decreaseQuantity(productId);
    };

    const handleDeleteFromCart = (productId) => {
        removeFromCart(productId)
    }


    return (
        <div className="font-Montserrat ">
            <Header />
            <section className=" xl:px-10 lg:px-6 px-2 pt-6 font-Montserrat">
                <h4 className="text-[10px] sm:text-base lg:text-lg md:mb-4 font-medium">
                    Cart
                    <span className="text-[#618295]">({cart.length})</span>
                </h4>

                {
                    cart.length === 0 ?
                        (
                            <div className="h-[calc(100vh-300px)] flex items-center justify-center">
                                <p>your cart is empty</p>
                            </div>
                        )
                        :
                        (
                            <ul className="flex flex-col gap-6 md:gap-10 xl:gap-16">
                                {
                                    cart.map((item, index) => (
                                        <li key={index}>
                                            <div className="flex items-center gap-2 xl:gap-8 relative">
                                                <div className="flex-1 flex">
                                                    <div className="flex-1">
                                                        <img src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`} alt="item image" className="w-full h-full xl:h-52 object-cover" />
                                                    </div>
                                                    <CheckoutDescription
                                                        item={item}
                                                        handleDecreaseQuantity={handleDecreaseQuantity}
                                                        handleIncreaseQuantity={handleIncreaseQuantity}
                                                    />
                                                </div>
                                                <ProccedToCheckout item={item} />
                                                <MdDeleteOutline onClick={()=>handleDeleteFromCart(item.id)}
                                                 className="absolute xl:w-10 hover:text-red-500 xl:h-10 md:h-6 md:w-6 md:-top-1 -top-4 right-0 hover:scale-105 cursor-pointer transition-all"/>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>

                        )
                }


            </section>
            <RelatedProducts />
            <Footer />
        </div>
    )
}

export default Cart

