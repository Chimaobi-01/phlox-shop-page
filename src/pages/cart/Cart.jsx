import Footer from "../../components/Footer"
import Header from "../../components/Header"
import RelatedProducts from "../../components/RelatedProducts"
import phone from '../../assets/iphoneNew.png'
import ProccedToCheckout from "../../components/ProccedToCheckout"
import CheckoutDescription from "../../components/CheckoutDescription"
import { useCart } from "../../services/CartContext"
import { useEffect, useState } from "react"


const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    const handleIncreaseQuantity = (productId) => {
        increaseQuantity(productId);
    };

    const handleDecreaseQuantity = (productId) => {
        decreaseQuantity(productId);
    };


    return (
        <div className="font-Montserrat">
            <Header />
            <section className="xl:px-10 lg:px-6 px-4 pt-6 font-Montserrat">
                <h4 className="text-[10px] font-medium">Cart <span className="text-[#618295]">({cart.length})</span></h4>

                {
                    cart.length === 0 ?
                        (
                            <p>your cart is empty</p>
                        )
                        :
                        (
                            <ul className="flex flex-col gap-5 md:gap-8">
                                {
                                    cart.map((item, index) => (
                                        <li key={index}>
                                            <div className="flex overflow-hidden">
                                                <span className="basis-[61px] md:basis-[160px]">
                                                    <img src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`} alt="" className="w-full h-full object-cover" />
                                                </span>
                                                <div className="flex-1 items-center flex gap-1 md:gap-8 xl:gap-36 ml-2 pl-2 md:pl-4 border-l-2">
                                                    <CheckoutDescription 
                                                        item={item}
                                                        handleDecreaseQuantity={handleDecreaseQuantity}
                                                        handleIncreaseQuantity={handleIncreaseQuantity}
                                                     />
                                                    <ProccedToCheckout item={item} />
                                                </div>
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

