import React, { useContext } from "react";
import { CartContext } from '../Carrito/cartcontext';

const CartItem = ({ id, img, title, quantity, price }) => {
    const { removeProduct } = useContext(CartContext);

    const handleRemoveProduct = () => {
        removeProduct(id);
    };

    return (
        <div className="row mb-3">
            <div className="col-md-2">
                <img
                    src={img}
                    alt={title}
                    className="img-fluid"
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
            </div>
            <div className="col-md-8">
                <p>{title}</p>
                <p className="mb-1">
                    Precio : $ {price}
                </p>
                <p className="mb-1">
                    Cantidad : {quantity}
                </p>
                <p className="mb-0">
                    Total : $ {(price * quantity).toFixed(2)}
                </p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
                <button onClick={handleRemoveProduct} className="btn btn-danger btn-block">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CartItem;

