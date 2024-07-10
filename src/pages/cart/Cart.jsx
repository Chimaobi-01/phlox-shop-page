import facebook from "../../assets/fb-social.svg";
import instagram from "../../assets/instagram-social.svg";
import whatsapp from "../../assets/whatsapp-social.svg";
import { useNavigate } from 'react-router-dom';
import { Header } from '../../utils/data'
import RelatedProducts from "../../components/RelatedProducts";
import Description from "../../components/Description";
import Quantity from "../../components/Quantity";
import iphone from '../../assets/iphoneNew.png'

const Cart = () => {
  const navigate = useNavigate()

  const goToCart = () => {
    navigate('/cart')
  }


  return (
    <div>
      <Header />
      <section className="font-Montserrat m-10">

        <p className="font-medium text-xl mb-4">Product Details</p>


        <div className="grid grid-cols-2 gap-10 h-[75vh]">
          <div className="bg-[#D9D9D9] rounded-3xl">
            <img src={iphone} alt="Product photo" className="w-full h-full object-cover" />
          </div>

          <div>
            <Description />
            <div className="flex gap-6 mt-2.5">
              <Quantity />
              <button onClick={goToCart} className="flex-[1.5] self-start flex items-center justify-center h-16 bg-[#D02335] rounded-2xl uppercase text-[#F1F1F1] font-medium text-2xl">add to cart</button>
            </div>


            <div className="colors-and-features">
              <div>
                <span className="font-medium text-2xl mb-2.5 mt-6 block uppercase">color</span>
                <span className="flex gap-3 ">
                  <span className="w-10 h-10 bg-[#FF000066]"></span>
                  <span className="w-10 h-10 bg-[#00000080]"></span>
                  <span className="w-10 h-10 bg-[#AE862580]"></span>
                </span>
              </div>
              <div>
                <span  className="font-medium text-2xl mb-2.5 mt-6 block uppercase">key features</span>
                <ul>
                  <li>
                    <span>ram</span>
                    <span>6GB</span>
                  </li>
                  <li>
                    <span>battery</span>
                    <span>Li-Ion 2815 mAh</span>
                  </li>
                  <li>
                    <span>network support</span>
                    <span>3G / LTE / 5G</span>
                  </li>
                  <li>
                    <span>screen display</span>
                    <span>Super Retina XDR OLED, HDR10</span>
                  </li>
                  <li>
                    <span>sensors</span>
                    <span>Face ID, accelerometer, gyro, Wideband (UWB) support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <span className="flex flex-col gap-2 font-medium text-xl text-[#10101099] uppercase mt-6">
          share this product
          <ul className="flex items-center gap-4">
            <li className="p-1.5 border-[#101010] rounded-full border flex items-center justify-center"><img src={facebook} alt="" className="shrink-0 w-6 h-6" /></li>
            <li className="p-1.5 border-[#101010] rounded-full border flex items-center justify-center"><img src={instagram} alt="" className="shrink-0 w-6 h-6" /></li>
            <li className="p-1.5 border-[#101010] rounded-full border flex items-center justify-center"><img src={whatsapp} alt="" className="shrink-0 w-6 h-6" /></li>
          </ul>
        </span>
      </section>
      <RelatedProducts />
    </div>
  )
}

export default Cart