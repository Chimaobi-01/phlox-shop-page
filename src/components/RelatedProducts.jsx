import { relatedProducts } from "../utils/data"
import Product from "./Product"



const RelatedProducts = () => {
  return (
    <section className="m-10 font-Montserrat mt-16">
        <h4 className=" mb-4 font-semibold text-3xl"> Suggested Products</h4>
        <ul className="grid grid-cols-4 auto-rows-[400px] gap-x-10 gap-y-20">
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