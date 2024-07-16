import { useEffect, useState } from "react"
import Product from "./Product"
import axios from "axios"
import Pagination from "./Pagination"
import { apiKey, appId, baseUrl, organizationId } from "../utils/data"


const Products = ({ products }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = products.slice(startIndex, startIndex + itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className=" section-padding xl:my-24">
      <h4 className="font-Montserrat text-center mb-12 font-semibold xl:text-[40px] md:text-3xl text-xl">Best Seller Products</h4>
      <ul className="grid md:grid-cols-4 grid-cols-3 xl:auto-rows-[430px] md:auto-rows-[250px] auto-rows-[180px] gap-3 md:gap-5 xl:gap-8 xl:gap-y-16">
        {
          currentData.map(product => (
            <Product key={product.id} {...product} />
          ))
        }
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleClick={handleClick}
      />

    </section>
  )
}

export default Products