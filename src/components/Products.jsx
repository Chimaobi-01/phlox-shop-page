import { products } from "../utils/data"
import Product from "./Product"


const Products = () => {
  return (
    <section className="min-h-screen m-10">
        <h4 className="font-Montserrat text-center mb-12 font-semibold text-[40px]">Best Seller Products</h4>
        <ul className="grid grid-cols-4 auto-rows-[450px] gap-x-10 gap-y-20">
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