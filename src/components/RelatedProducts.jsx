import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios"



const RelatedProducts = () => {
  const [products, setProducts] = useState([])
  const relatedProducts = products.slice(0,3)

  useEffect(() => {

    axios.get('https://api.timbu.cloud/products?organization_id=e5b66405b71d44b58a1f36694e5d5489&Appid=RU083NB9JVH8J4Y&Apikey=acea970f32b744da8f09eaecadb49a6020240713122926900475')
      .then(response => {
        setProducts(response.data.items)
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, [])


  return (
    <section className="section-padding font-Montserrat pt-10 md:pt-16 gap-2 flex flex-col md:gap-4">
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