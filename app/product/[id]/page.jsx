"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/components/cartContext"; // Assuming you have a CartContext

const ProductDetails = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Using cart context

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
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const imageUrl = product?.media?.images[0]?.url
    ? `https://${product.media.images[0].url}`
    : "";

  return (
    <div className="px-4 z-20 font-symphony flex flex-col items-center justify-center gap-10 lg:mt-[30px] lg:items-start lg:pl-[105px] lg:pr-[87px]">
      <div className="flex flex-col items-center justify-center mt-[58px] lg:flex-row lg:justify-start gap-10">
        {imageUrl ? (
          <img
            className="w-[358px] h-[380px] rounded-2xl xl:w-[349px] lg:h-[465px]"
            src={imageUrl}
            alt={product?.name}
          />
        ) : (
          <p>No image available</p>
        )}
        <div className="flex flex-col gap-4 lg:gap-6">
          <h1 className="text-lg font-bold text-black lg:text-2xl">
            {product?.name}
          </h1>
          <p className="text-base text-[#FF4500] font-semibold lg:text-lg">
            {product?.price?.current?.value
              ? `$${product.price.current.value}`
              : "Price not available"}
          </p>
          <p className="text-sm lg:text-lg text-black">
            {product?.description || "No description available"}
          </p>
          <ul className="text-lg/[24px] text-black lg:text-[18px]/[22px] font-medium list-disc ml-5">
            {product?.additionalInfos?.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
          <div className="flex items-center gap-5 mt-4">
            <button
              onClick={() => setQuantity((q) => Math.max(q - 1, 1))}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-orange-600"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-orange-600"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-4 py-3 lg:w-3/12 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
