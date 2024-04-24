import React from 'react';

const Cambios = () => {
    return (
        <div  style={{ marginLeft: '50px' }} >
            <h3>Políticas de cambio y devolución</h3>
            <div >
                <h4>Condiciones para realizar el cambio:</h4>
                <ul>
                    <li>El producto debe estar en perfecto estado, sin haber retirado ningún sticker ni etiqueta.</li>
                    <li>No se aceptarán cambios si se han despegado los stickers de autenticidad.</li>
                </ul>
            </div>
            <div>
                <h4>Plazo para efectuar el cambio:</h4>
                <p>30 días corridos desde la fecha de recepción del producto.</p>
            </div>
            <div>
                <h4>Costo del cambio:</h4>
                <p>Los gastos de cambio y nueva entrega son:</p>
                <ul>
                    <li>$2.500 en CABA</li>
                    <li>$3.000 en GBA</li>
                    <li>$8.000 para Patagonia</li>
                    <li>$5.500 para el resto del país</li>
                </ul>
            </div>
            <div>
                <h4>Procedimiento de cambio:</h4>
                <p>Los cambios deben ser solicitados por correo electrónico a ssl@gmail.com.ar e incluir los siguientes datos:</p>
                <ul>
                    <li>Número de pedido</li>
                    <li>Modelo, color y tamaño solicitado</li>
                    <li>Dirección de entrega</li>
                </ul>
                <p>Una vez confirmado el stock del producto solicitado, se enviará una solicitud de pago a través de MercadoPago.</p>
            </div>
            <div>
                <h4>Devoluciones:</h4>
                <p>Las devoluciones para compras online tienen un plazo de 10 días corridos desde la fecha de entrega y deben ser informadas previamente a ssl@gmail.com.ar.</p>
                <p>El costo de la devolución corre por cuenta del cliente y una vez verificado el estado del producto se realizará el reintegro a través de MercadoPago.</p>
            </div>
        </div>
    );
}

export default Cambios;