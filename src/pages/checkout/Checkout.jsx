import Footer from "../../components/Footer"
import Header from "../../components/Header"
import RelatedProducts from "../../components/RelatedProducts"
import phone from '../../assets/iphoneNew.png'
import ProccedToCheckout from "../../components/ProccedToCheckout"
import CheckoutDescription from "../../components/CheckoutDescription"


const Checkout = () => {
    return (
        <div className="font-Montserrat">
            <Header />
            <section className="xl:px-10 lg:px-6 px-4 pt-6 font-Montserrat">
                <h4 className="text-[10px] font-medium">Cart <span className="text-[#618295]">(1)</span></h4>

                <div className="flex">
                    <span className="basis-[61px] md:basis-[160px]">
                        <img src={phone} alt="" className="w-full h-full object-cover" />
                    </span>
                    <div className="flex-1 flex gap-1 md:gap-8 xl:gap-36 ml-2 pl-2 md:pl-4 border-l-2">
                        <CheckoutDescription />
                        <ProccedToCheckout />
                    </div>
                </div>

            </section>
            <RelatedProducts />
            <Footer />
        </div>
    )
}

export default Checkout

