
import { useNavigate } from "react-router-dom";
import { Footer, Header } from "../../utils/data";
import RelatedProducts from "../../components/RelatedProducts";
import Description from "../../components/Description";
import Quantity from "../../components/Quantity";
import iphone from "../../assets/iphoneNew.png";
import ProductFeatures from "../../components/ProductFeatures";
import ShareProduct from "../../components/ShareProduct";
import Colors from "../../components/Colors";

const Cart = () => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <Header />
      <section className="font-Montserrat section-padding min-h-[calc(100vh-200px)] flex flex-col gap-6 pt-4 xl:pt-10">
        <p className="font-medium md:text-base xl:text-xl text-[8px]">Product Details</p>

        {/* Product image */}
        <div className="flex gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          <div 
          className="bg-[#D9D9D9] rounded-3xl md:rounded-[40px] xl:rounded-[60px] basis-[150px] md:basis-[300px] lg:basis-[450px] xl:basis-[45%]">
            <img
              src={iphone}
              alt="Product photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product descriptions */}
          <div className="flex-1">
            <Description />
            <div className="flex mt-2.5 md:mt-3.5 gap-2 md:gap-4 items-center flex-wrap-reverse">
              <Quantity />
              <button
                onClick={goToCart}
                className="flex-1 lg:flex-none basis-[120px] self-end flex items-center justify-center bg-[#D02335] md:rounded-2xl rounded-[10px] uppercase text-[#F1F1F1] font-medium md:text-xl xl:text-2xl text-xs py-1.5 px-4"
              >
                add to cart
              </button>
            </div>
            <Colors />
            <ProductFeatures />

          </div>
        </div>

        <ShareProduct />
      </section>
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default Cart;
