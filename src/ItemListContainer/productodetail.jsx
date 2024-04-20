import React, { useContext } from 'react';
import { CartContext } from '../Carrito/cartcontext';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemListContainer/itemcount';
import { Datacards } from '../ItemListContainer/datacards'; 

const ProductoDetail = () => {
  const { productId } = useParams();
  const product = Datacards.find((item) => item.id === parseInt(productId));
  const { addToCart } = useContext(CartContext); 

  if (!product) {
    return <div>Producto no encontrado</div>;
  }
  const handleAddToCart = (quantity) => {
    addToCart({ ...product, quantity }); 
    console.log(`Agregado al carrito: ${quantity} ${product.title}`);
};

  return (
    <div className="card mx-auto" style={{ width: '18rem' }}>
      {product && (
        <>
          <img src={product.img} alt={product.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
          <div className="card-body">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">${product.price.toFixed(2)}</p>
            <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} /> 
          </div>
        </>
      )}
    </div>
  );
};
export default ProductoDetail;

