import { relatedProducts } from "../utils/data"
import Product from "./Product"



const RelatedProducts = () => {
  return (
    <section className="section-padding font-Montserrat py-10 md:pt-16 gap-2 flex flex-col md:gap-4">
        <h4 className=" font-semibold xl:text-3xl text-[10px] md:text-xl"> Suggested Products</h4>
        <ul className="grid lg:grid-cols-4 grid-cols-3 xl:auto-rows-[430px] md:auto-rows-[250px] auto-rows-[180px] gap-3 md:gap-8 xl:gap-8 xl:gap-y-16">
            {
                relatedProducts.map(product => (
                    <Product key={product.id} {...product} />
                ))
            }
        </ul>
    </section>
  )
}

export default RelatedProducts