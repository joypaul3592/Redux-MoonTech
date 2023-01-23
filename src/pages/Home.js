import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../Context/ProductProvider";

const Home = () => {

  const { state: { products } } = useProducts()
  console.log(products)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        products.map((product, idx) => <ProductCard key={idx} product={product} />)
      }
    </div>
  );
};

export default Home;
