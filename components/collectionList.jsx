"use client";

import { useEffect, useState } from "react";
import Loader from "./loader";
import Link from "next/link";

const collectionList = () => {
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
        setProducts(data.products.slice(0, 3));
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-symphony">
        {products.map((product) => (
          <div key={product.id} className="text-sm">
            <Link href={`/product/${product.id}`}>
              <img
                src={`https://${product.imageUrl}`}
                alt={product.name}
                className="w-full h-96 object-cover mb-4 hover:opacity-80 transition"
              />
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price.current.value}</p>
            </Link>
          </div>
        ))}
      </div>
  );
};

export default collectionList;

{
  /*55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e*/
}
