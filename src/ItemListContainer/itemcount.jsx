import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../Carrito/cartcontext';
import { Link, useParams } from 'react-router-dom';
import { getOneProducts } from '../services/firebase'; 

const ItemCount = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getOneProducts(productId);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

 

  const handleIncrement = () => {
    if (count < product.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCartWithCount = () => {
    addToCart({ ...product, quantity: count });
    console.log(`Agregado al carrito: ${count} ${product.title}`);
  };

  return (
    <div>
      <Link to="/" className="btn btn-primary mb-3">
        Ir al inicio
      </Link>
      <div className="card mx-auto" style={{ width: '18rem' }}>
        {product && (
         <>
         <img src={product.img} alt={product.title} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
         <div className="card-body d-flex flex-column"> 
           <h1 className="card-title">{product.title}</h1>
           <p className="card-text">${product.price.toFixed(2)}</p>
           <div className="btn-group align-items-center" role="group" aria-label="Botones de cantidad">
             <button type="button" className="btn btn-secondary" onClick={handleDecrement}>-</button>
             <span className="btn btn-light">{count}</span>
             <button type="button" className="btn btn-secondary" onClick={handleIncrement}>+</button>
           </div>
           <button onClick={handleAddToCartWithCount} className="btn btn-danger mt-3">Añadir al carrito</button>
         </div>
       </>
        )}
      </div>
    </div>
  );
};

export default ItemCount;



