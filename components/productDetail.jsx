"use client";

import { useState, useEffect } from "react";

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const url = `https://asos2.p.rapidapi.com/products/v2/list?store=US&productId=${productId}&currency=USD&lang=en-US`;  // Assuming you have a specific endpoint for fetching product details
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setProduct(data.products[0]);  // Assuming you're fetching a single product
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const addToCart = () => {
    const newCartItem = { ...product, quantity };
    setCart((prevCart) => [...prevCart, newCartItem]);
    alert(`${product.name} has been added to your cart!`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="p-5 lg:py-10 flex flex-col items-center lg:items-start lg:flex-row gap-10">
      <div className="w-full lg:w-1/2">
        <img
          src={`https://${product.imageUrl}`}
          alt={product.name}
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-gray-600 text-lg">${product.price.current.value}</p>
        <p className="text-gray-800">{product.description || "No description available."}</p>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300">
            <button
              onClick={decrementQuantity}
              className="px-4 py-2 bg-orange-600 text-white"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="px-4 py-2 bg-orange-600 text-white"
            >
              +
            </button>
          </div>
          <button
            onClick={addToCart}
            className="px-6 py-2 bg-black text-white font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
