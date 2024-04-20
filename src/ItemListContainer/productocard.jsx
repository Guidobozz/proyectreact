import React, { useContext } from 'react';
import { CartContext } from '../Carrito/cartcontext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); 
  };

  return (
    <div className="card">
      <img src={product.img} alt={product.title} className="card-img-top" />
      <div className="card-body">
        <h1 className="card-title">{product.title}</h1>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <button onClick={handleAddToCart} className="btn btn-primary mr-2">Añadir al Carrito</button>
        <Link to={`/product/${product.id}`} className="btn btn-danger">Ver Detalles</Link>
      </div>
    </div>
  );
};

export default ProductCard;