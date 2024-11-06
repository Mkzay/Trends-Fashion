"use client";

import { useState, useEffect } from "react";

const ProductDetails = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const url = `https://asos2.p.rapidapi.com/products/v4/detail?lang=en-US&store=US&id=${id}&sizeSchema=US&currency=USD`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "55188b7c57msh8918d4b682110e8p198c72jsn131a175ca79e",
      "x-rapidapi-host": "asos2.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("Product details response:", data); // Log the response for debugging
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const incrementQuantity = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prevQty) => prevQty - 1);
  };

  const addToCart = () => {
    console.log(`Added ${quantity} of ${product?.name} to cart`);
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  // Use the first image from the media.images array
  const imageUrl = product?.media?.images[0]?.url
    ? `https://${product.media.images[0].url}`
    : "";

  return (
    <div className="p-5 mt-16 lg:mt-28">
      <h1 className="text-2xl font-bold mb-4">{product?.name}</h1>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={product?.name}
          className="w-full h-96 object-cover mb-4 lg:w-5/12"
        />
      ) : (
        <p>No image available</p>
      )}
      {/* Handle price */}
      <p className="text-lg font-semibold">
        {product?.price?.current?.value
          ? `$${product.price.current.value}`
          : "Price not available"}
      </p>
      <div className="flex items-center gap-2 mt-4">
        <button onClick={decrementQuantity} className="px-4 py-2 bg-gray-300">
          -
        </button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity} className="px-4 py-2 bg-gray-300">
          +
        </button>
      </div>
      <button
        onClick={addToCart}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
