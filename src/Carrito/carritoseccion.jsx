/*
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartcontext';
import CarritoContenido from './carritocontenido';

const CarritoSeccion = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
           
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    <CarritoContenido />
                    <Link to="/">Seguir comprando</Link> 
                    <button>Terminar compra</button>
                </div>
            )}
        </div>
    );
}

export default CarritoSeccion;
*/