"use client"

import { createContext, useContext, useState } from "react";

// Create the context
const CartContext = createContext();

// Cart provider component that wraps your app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // If the product is already in the cart, update its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      // Otherwise, add the new product to the cart
      return [...prevItems, { ...product, quantity }];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to increment the quantity of an item
  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement the quantity of an item
  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price.current.value * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => useContext(CartContext);
