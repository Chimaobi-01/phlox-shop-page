
import { useNavigate, useParams } from "react-router-dom";
import { Footer, Header } from "../../utils/data";
import RelatedProducts from "../../components/RelatedProducts";
import Description from "../../components/Description";
import Quantity from "../../components/Quantity";
import iphone from "../../assets/iphoneNew.png";
import ProductFeatures from "../../components/ProductFeatures";
import ShareProduct from "../../components/ShareProduct";
import Colors from "../../components/Colors";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../services/CartContext";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart, cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();


  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  const handleIncreaseQuantity = () => {
    console.log('click', cart);
    const isProductPresent = cart.find(item => item.id === product.id)
    if(isProductPresent === undefined){
      addToCart(product)
      return
    }
    increaseQuantity(product.id);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };


  useEffect(() => {

    axios.get(`https://api.timbu.cloud/products/${id}?organization_id=e5b66405b71d44b58a1f36694e5d5489&Appid=RU083NB9JVH8J4Y&Apikey=acea970f32b744da8f09eaecadb49a6020240713122926900475`)
      .then(response => response.data)
      .then(data => setProduct(data))
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, [id])

  if (product === null) {
    return (
      <div role="status" className="fixed inset-0 flex items-center justify-center">
        <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }


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
              src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
              alt="Product photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product descriptions */}
          <div className="flex-1">
            <Description
              name={product.name}
              description={product.description}
              current_price={product.current_price.toLocaleString()}
            />
            <div className="flex mt-2.5 md:mt-3.5 gap-2 md:gap-4 items-center flex-wrap-reverse">
              <Quantity 
                quantity={cart.quantity} 
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleIncreaseQuantity={handleIncreaseQuantity}
                 />
              <button
                onClick={handleAddToCart}
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

export default ProductDetail;
