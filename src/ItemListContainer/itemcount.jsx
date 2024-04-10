import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (typeof onAdd === 'function') {
      onAdd(count);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;