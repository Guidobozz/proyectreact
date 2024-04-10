// ProductoDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemListContainer/itemcount';
import { Datacards } from '../ItemListContainer/datacards'; 

const ProductoDetail = () => {
  const { productId } = useParams();
  const product = Datacards.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handleAddToCart = (quantity) => {
    /* sdbsiobssajdsnsndasj      */
    console.log(`Agregado al carrito: ${quantity} ${product.title}`);
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <p>${product.price.toFixed(2)}</p>
      <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} /> 
    </div>
  );
};

export default ProductoDetail;
