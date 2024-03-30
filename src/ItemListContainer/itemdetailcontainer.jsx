import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardsData from './cardsdata';

const ItemDetailContainer = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null); 

  useEffect(() => {
  
    const foundProduct = CardsData.find(item => item.id === parseInt(productId));
    
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [productId]);
  if (!product) {
    return <div>Producto No Encontrado!</div>;
  }
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>{product.price}</h2>
      </div>
    </div>
  );
};
  
  export default ItemDetailContainer;
