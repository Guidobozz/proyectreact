import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'; 
import { CartContext } from './cartcontext';
import CartIcon from '../assets/logocarrito.png';

const Carrito = () => {
    const { cartQuantity } = useContext(CartContext);

    return (
        <div>
            <NavLink to="/carrito"> 
                <img src={CartIcon} alt="Carrito de Compras" style={{ width: '50px', cursor: 'pointer' }} />
                {cartQuantity > 0 && <span>{cartQuantity}</span>}
            </NavLink>
        </div>
    );
}

export default Carrito;

