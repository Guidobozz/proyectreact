/*
import React from 'react';
import { useCount } from '../hooks/usecount';

const ItemCount = ({ stock, product }) => {
  const { count, decrement, increment, addToCart } = useCount();

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Botones de cantidad">
        <button type="button" className="btn btn-secondary" onClick={decrement}>-</button>
        <span className="btn btn-light">{count}</span>
        <button type="button" className="btn btn-secondary" onClick={increment}>+</button>
      </div>
      <button onClick={() => {
        addToCart(product); 
      }} className="btn btn-danger">Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;




import React, { useState, useContext } from 'react';
import { CartContext } from '../Carrito/cartcontext';

const ItemCount = ({ stock, initial, product }) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useContext(CartContext); 

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
    addToCart({ ...product, quantity: count }); 
  };

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Botones de cantidad">
        <button type="button" className="btn btn-secondary" onClick={handleDecrement}>-</button>
        <span className="btn btn-light">{count}</span>
        <button type="button" className="btn btn-secondary" onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart} className="btn btn-danger">Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;
*/
import React, { useState, useContext } from 'react';
import { CartContext } from '../Carrito/cartcontext';

const ItemCount = ({ stock, initial, product }) => {
  const [count, setCount] = useState(initial);
  const { addToCart } = useContext(CartContext); 

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
    addToCart({ ...product, quantity: count }); 
  };

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Botones de cantidad">
        <button type="button" className="btn btn-secondary" onClick={handleDecrement}>-</button>
        <span className="btn btn-light">{count}</span>
        <button type="button" className="btn btn-secondary" onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart} className="btn btn-danger">Añadir al carrito</button>
    </div>
  );
};

export default ItemCount;