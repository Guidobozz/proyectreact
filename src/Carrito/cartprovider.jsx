/*
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CustomCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeproducto = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const limpiarcarrito = () => {
        setCartItems([]);
    };

    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeproducto, limpiarcarrito, cartQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

*/