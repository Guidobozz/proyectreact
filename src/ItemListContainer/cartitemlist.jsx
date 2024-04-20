
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Carrito/cartcontext";
import CartItem from "./cartitem";

const CartItemList = () => {
    const { cartItems, cartTotal, emptyCart } = useContext(CartContext);

    return (
        <div className="ItemOnCartContainerList">
            {cartItems.map((product) => (
                <div key={product.id + "onCart"} className="ItemOnCartContainerProduct">
                    <CartItem
                        id={product.id}
                        img={product.img}
                        title={product.title}
                        quantity={product.quantity}
                        price={product.price}
                    />
                </div>
            ))}
            <div className="TotalCartPrice">Total Cart : ${cartTotal}</div>
            <button className="EmptyCartButton" onClick={emptyCart}>
                Vaciar Carrito
            </button>
            <Link  to="/">
                Seguir comprando
            </Link>
            <Link to="/checkout" className="FinishCartButton">
                Terminar Compra
            </Link>
        </div>
    );
};

export default CartItemList;
