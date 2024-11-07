import React from "react";
import { useCart } from "@/components/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ onClose }) => {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <div className="fixed top-14 right-5 z-40 lg:z-50">
      <div className="relative w-80 h-72 rounded-xl bg-white shadow-lg p-5 overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center border-b pb-3">
          Your Cart
        </h2>

        {/* Display cart items */}
        {cartItems.length > 0 ? (
          <ul className="space-y-6 overflow-y-auto max-h-[60vh]">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-600">
                    Price: ${item.price ? item.price.toFixed(2) : "0.00"}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <FontAwesomeIcon  icon={faTrash} />   
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600 mt-10">Your cart is empty</p>
        )}

        {/* Total price */}
        <div className="border-t mt-6 pt-3 flex justify-between items-center">
          <p className="text-lg font-bold">Total:</p>
          <p className="text-xl font-semibold">
            ${totalPrice ? totalPrice.toFixed(2) : "0.00"}
          </p>
        </div>

        <button className="w-full mt-5 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
