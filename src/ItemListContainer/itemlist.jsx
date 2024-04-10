import React from 'react';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="item">
          <img src={product.img} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
