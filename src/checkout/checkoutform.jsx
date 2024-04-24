import React, { useContext, useState } from "react";
import { CartContext } from "../Carrito/cartcontext";
import { createBuyOrder } from "../services/firebase";
import Swal from 'sweetalert2';

const CheckoutForm = () => {
    const { cartItems, emptyCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1); 
    const [orderNumber, setOrderNumber] = useState(null); 

    const [userData, setUserData] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
        cardNumber: "",
        dni: "",
        cvv: "",
        paymentMethod: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmitBasicInfo = (event) => {
        event.preventDefault();
        setStep(2);
    };

    const handleSubmitPaymentInfo = (event) => {
        event.preventDefault();
    
        if (!cartItems || cartItems.length === 0) {
            console.error("Error placing order: Cart is empty.");
            Swal.fire(
                'Error',
                'No hay productos en el carrito. Por favor, agrega al menos un producto antes de finalizar la compra.',
                'error'
            );
            return;
        }
    
        setLoading(true);
        
        
        const order = {
            ...userData,
            items: cartItems,
            date: new Date(),
        };
        
        createBuyOrder(order)
            .then((orderNumber) => {
                setOrderNumber(orderNumber); 
                emptyCart(); 
                setStep(1); 
                Swal.fire(
                    '¡Felicitaciones!',
                    `Tu orden ha sido completada con éxito. Número de Orden: ${orderNumber}`,
                    'success'
                );
            })
            .catch((error) => {
                console.error("Error placing order:", error);
                Swal.fire(
                    'Error',
                    'Ha ocurrido un error al procesar tu orden. Por favor, intenta nuevamente.',
                    'error'
                );
            })
            .finally(() => {
                setLoading(false);
                setUserData({
                    name: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    cardNumber: "",
                    dni: "",
                    cvv: "",
                    paymentMethod: "",
                });
            });
    };
    return (
        <div className="container">
             {loading && <p>Cargando...</p>}
            {step === 1 && (
                <form className="row g-3" onSubmit={handleSubmitBasicInfo}>
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="inputName" name="name" value={userData.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputLastname" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="inputLastname" name="lastname" value={userData.lastname} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail" className="form-label">Correo Electrónico</label>
                        <input type="email" className="form-control" id="inputEmail" name="email" value={userData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPhone" className="form-label">Teléfono</label>
                        <input type="text" className="form-control" id="inputPhone" name="phone" value={userData.phone} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Continuar</button>
                        {orderNumber && (
                <p>Número de Orden: {orderNumber}</p>
            )}
                    </div>

                </form>
            )}

            {step === 2 && (
                <form className="row g-3" onSubmit={handleSubmitPaymentInfo}>
                    <div className="col-md-6">
                        <label htmlFor="inputCardNumber" className="form-label">Número de Tarjeta</label>
                        <input type="text" className="form-control" id="inputCardNumber" name="cardNumber" value={userData.cardNumber} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                    <label htmlFor="inputCVV" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="inputCVV" name="cvv" value={userData.cvv} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputDNI" className="form-label">DNI</label>
                        <input type="text" className="form-control" id="inputDNI" name="dni" value={userData.dni} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPaymentMethod" className="form-label">Método de Pago</label>
                        <select className="form-select" id="inputPaymentMethod" name="paymentMethod" value={userData.paymentMethod} onChange={handleChange} required>
                            <option value="">Seleccionar</option>
                            <option value="visadebito">Visa Debito</option>
                            <option value="mastercarddebito">Master Card Debito</option>
                            <option value="mercadopago">Mercado pago</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default CheckoutForm;
