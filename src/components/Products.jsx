import { products } from "../utils/data"
import Product from "./Product"


const Products = () => {
  return (
    <section className="min-h-screen section-padding xl:my-24">
        <h4 className="font-Montserrat text-center mb-12 font-semibold xl:text-[40px] md:text-3xl text-xl">Best Seller Products</h4>
        <ul className="grid md:grid-cols-4 grid-cols-3 xl:auto-rows-[430px] md:auto-rows-[250px] auto-rows-[180px] gap-3 md:gap-5 xl:gap-8 xl:gap-y-16">
            {
                products.map(product => (
                    <Product key={product.id} {...product} />
                ))
            }
        </ul>
    </section>
  )
}

export default Products