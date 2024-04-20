import React, { useContext, useState } from 'react';
import { CartContext } from '../Carrito/cartcontext';

export const useCount = () => {
  const [count, setCount] = useState(1);
  const { addToCart: addToCartContext } = useContext(CartContext);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  const addToCartHandler = (prod) => {
    addToCartContext(prod, count);
  };

  const resetCount = () => {
    setCount(0);
  };

  return { count, decrement, increment, addToCart: addToCartHandler, resetCount };
};
