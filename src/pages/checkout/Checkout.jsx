import Footer from "../../components/Footer"
import Header from "../../components/Header"
import RelatedProducts from "../../components/RelatedProducts"
import star from '../../assets/star.png'
import Quantity from "../../components/Quantity"
import phone from '../../assets/iphoneNew.png'


const Checkout = () => {
    return (
        <div className="font-Montserrat">
            <Header />
            <section className="flex m-10 gap-10">
                <div className="flex-[2.5] flex items-center gap-4">
                        <img src={phone} alt="" className="h-40 w-32 object-cover" />
                    <div className="description-wrapper flex-[1.9] ps-4 border-l-2">
                        <span className="font-bold flex flex-col">
                            <span className="text-3xl">iPhone 12 128GB ROM</span>
                            <span className="text-[#A2A4A8] text-xl">#780,000</span>
                        </span>

                        <span className="description-and-review text-sm font-medium">
                            <span className="flex items-center gap-1.5">
                                <span>Brand:</span>
                                <span className="text-[#618295]">Apple | Similar products from Apple</span>
                            </span>
                            <p>
                                Beats by Dre remains a leader in premium headphones,
                                leveraging its strong brand identity and association
                                with music icons to target young, style-conscious
                                consumers who prioritize.
                            </p>
                            <span className="flex items-center gap-1">
                                <ul className="stars flex">
                                    {
                                        [1, 2, 3, 4, 5].map(i => (
                                            <li key={i}><img src={star} alt="star" className="w-4 h-4" /></li>
                                        ))
                                    }
                                </ul>
                                <span>(11.k Reviews)</span>
                            </span>
                        </span>
                    </div>
                    <Quantity />
                </div>

                <div className="checkout flex-1 rounded-3xl bg-[#D9D9D9] flex flex-col gap-6 font-medium uppercase p-4">
                    <h4 className=" text-2xl text-[#00000099]">cart summary</h4>
                    <div className="flex items-center justify-between">
                        <span className=" text-lg">2</span>
                        <span className="font-bold text-3xl">#780,000</span>
                    </div>
                    <button className=" bg-[#D02335] py-4 uppercase rounded-2xl text-2xl text-[#F1F1F1]">procced to checkout</button>
                </div>
            </section>

            <RelatedProducts />
            <Footer />
        </div>
    )
}

export default Checkout