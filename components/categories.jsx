"use client";

import { useEffect, useState } from "react";
import Loader from "./loader";

const categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const url =
    "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4210&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        // Take only the first 6 products from the result
        setProducts(data.products.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="p-5 lg:py-0 lg:-mt-20 pb-20 flex flex-col gap-10 font-symphony">
      <ul className="flex items-start justify-between lg:justify-normal lg:gap-10">
        <li>Overview</li>
        <li>Hoodie</li>
        <li>Coats & Jacket</li>
        <li>Denim</li>
        <li>Shirt</li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="text-sm">
            <img
              src={`https://${product.imageUrl}`}
              alt={product.name}
              className="w-full h-96 object-cover mb-4 hover:opacity-80 transition"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.current.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default categories;
