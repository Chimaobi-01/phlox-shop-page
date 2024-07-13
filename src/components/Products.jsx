import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios"


const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {

    axios.get('/api/products?organization_id=e5b66405b71d44b58a1f36694e5d5489&Appid=RU083NB9JVH8J4Y&Apikey=acea970f32b744da8f09eaecadb49a6020240713122926900475')
      .then(response => {
        setProducts(response.data.items)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, [])



  return (
    <section className=" section-padding xl:my-24">
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