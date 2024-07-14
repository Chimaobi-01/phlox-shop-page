import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios"
import { apiKey, appId, baseUrl, organizationId } from "../utils/data"



const RelatedProducts = () => {
  const [products, setProducts] = useState([])
  const relatedProducts = products.slice(0,3)

  useEffect(() => {

    axios.get(`${baseUrl}/products?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`)
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