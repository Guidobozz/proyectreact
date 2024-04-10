import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const formattedPrice = product.price.toFixed(2);

  return (
    <div className="card">
      <img src={product.img} alt={product.title} className="card-img-top" />
      <div className="card-body">
        <h1 className="card-title">{product.title}</h1>
        <p className="card-text">${formattedPrice}</p>
        <button onClick={() => onAddToCart(product)} className="btn btn-primary">Añadir al Carrito</button>
        <Link to={`/product/${product.id}`} className="btn btn-secondary">Ver Detalles</Link>
      </div>
    </div>
  );
};

export default ProductCard;