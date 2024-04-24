import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartcontext';
import CartItemList from '../ItemListContainer/cartitemlist';

const CarritoContenido = () => {
    const { cartQuantity } = useContext(CartContext);

    if (cartQuantity === 0) {
        return (
            <div>
                <p>Carrito Vacío</p>
                <Link to="/" className="btn btn-danger">
                    Seguir comprando
                </Link>
            </div>
        );
    }

    return <CartItemList />;
}

export default CarritoContenido;

