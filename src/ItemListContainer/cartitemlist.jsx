import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Carrito/cartcontext";
import CartItem from "./cartitem";

const CartItemList = () => {
    const { cartItems, cartTotal, emptyCart } = useContext(CartContext);

    return (
        <div className="container">
            <div className="card">
                <div className="card-header">Resumen del Carrito</div>
                <div className="card-body">
                    {cartItems.map((product) => (
                        <div key={product.id + "onCart"} className="ItemOnCartContainerProduct card mb-3">
                            <CartItem
                                id={product.id}
                                img={product.img}
                                title={product.title}
                                quantity={product.quantity}
                                price={product.price}
                            />
                        </div>
                    ))}
                    <div className="card-text">Total: ${cartTotal}</div>
                    <button className="btn btn-dark mt-3 mr-2" onClick={emptyCart}>Vaciar Carrito</button>
                    <Link to="/" className="btn btn-primary mt-3 mr-2">Seguir comprando</Link>
                    <Link to="/checkout" className="btn btn-success mt-3">Terminar Compra</Link>
                </div>
            </div>
        </div>
    );
};

export default CartItemList;

