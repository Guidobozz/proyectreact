import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Cards from '../ItemListContainer/cards'; 
import CardsData from './cardsdata';

const Itemlistcontainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const products = CardsData.filter(product => product.category === categoryId);
      setFilteredProducts(products);
    } else {
      setFilteredProducts([]);
    }
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      {filteredProducts.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={require(`../assets/${product.image}`).default} alt={product.title} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Itemlistcontainer;



