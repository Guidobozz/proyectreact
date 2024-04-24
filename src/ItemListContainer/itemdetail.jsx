import React from 'react';
import ItemCount from "../ItemListContainer/itemcount";


const ItemDetail = ({ prod }) => {
  return (
    <section className='container--itemDetail'>
      <h3 className='itemDetail--title'>{prod.title}</h3>
      <img
        className='itemDetail--img'
        src={prod.img}
        alt={prod.title}
      />
      <div className='itemDetail--price'>
        Price $ {prod.price}
      </div>
      <div className='itemDetail--stock'>Stock {prod.stock}</div>
      <ItemCount prod={prod} />
    </section>
  );
};

export default ItemDetail;