import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartcontext';
import CartItemList from '../ItemListContainer/cartitemlist';



export const CarritoContenido = () => {
	const { cartQuantity } = useContext(CartContext);
    if (cartQuantity === 0)
    return (
        <div >
            Carrito Vacio <br />{" "}
            <Link  to="/">
                Seguir comprando
            </Link>
        </div>
    );

return <CartItemList />;
};






































/*
const CarritoContenido = () => {
    const { cartItems, limpiarcarrito } = useContext(CartContext);

    return (
        <div>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    {cartItems.map(item => (
                        <CartItem
                            key={item.id} 
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity} 
                        />
                    ))}
                    <button onClick={limpiarcarrito}>Limpiar Carrito</button>
                    <Link to="/">Seguir comprando</Link> 
                    <button>Terminar compra</button>
                </>
            )}
        </div>
    );
}
*/
export default CarritoContenido;
