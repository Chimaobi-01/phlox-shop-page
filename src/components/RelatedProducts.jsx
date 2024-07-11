import { relatedProducts } from "../utils/data"
import Product from "./Product"



const RelatedProducts = () => {
  return (
    <section className="m-10 font-Montserrat mt-16">
        <h4 className=" mb-4 font-semibold text-3xl"> Suggested Products</h4>
        <ul className="grid md:grid-cols-4 grid-cols-3 xl:auto-rows-[430px] md:auto-rows-[250px] auto-rows-[180px] gap-3 md:gap-5 xl:gap-8 xl:gap-y-16">
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