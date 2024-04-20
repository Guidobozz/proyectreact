import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeProduct = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalPrice = () => {
        const total = cartItems.reduce((totalPrice, item) => totalPrice + (item.price * item.quantity), 0);
        setCartTotal(total.toFixed(2));
    };

    const quantityItems = () => {
        const quantity = cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
        setCartQuantity(quantity);
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        totalPrice();
        quantityItems();
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ 
            cartItems, 
            addToCart, 
            removeProduct, 
            clearCart, 
            cartQuantity, 
            cartTotal,
            totalPrice,
            quantityItems,
            emptyCart,
        }}>
            {children}
        </CartContext.Provider>
    );
};



































/*
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeProduct = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        const calculateCart = () => {
            const quantity = cartItems.reduce((total, item) => total + item.quantity, 0);
            setCartQuantity(quantity);

            const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
            setCartTotal(total.toFixed(2));
        };

        calculateCart();
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeProduct, clearCart, cartQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
*/