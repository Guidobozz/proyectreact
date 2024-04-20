
import React, { useContext } from "react";
import { CartContext } from '../Carrito/cartcontext';

const CartItem = ({ id, img, title, quantity, price }) => {
    const { removeProduct } = useContext(CartContext);

    const handleRemoveProduct = () => {
        removeProduct(id);
    };

    return (
        <div>
            <div>
                <img
                    src={img}
                    alt={title}
                    style={{ width: '100px', height: '100px', }}
                />
            </div>
            <div>
                <p>{title}</p>
				<p >
					Price : $ {price}
				</p>
				<p>
					Quantity : {quantity}
				</p>
				<p >
					Total Product : $ {(price * quantity).toFixed(2)}
				</p>
            </div>
            <div>
                <button onClick={handleRemoveProduct}>
                    Eliminar
                </button>
            </div>
        </div>
    );
};
export default CartItem;
