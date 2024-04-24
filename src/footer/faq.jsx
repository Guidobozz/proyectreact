import React from 'react';

const FAQ = () => {
    return (
        <div  style={{ marginLeft: '50px' }}>
            <h1>Preguntas Frecuentes</h1>
            <div >
                <h2>Información sobre nuestro servicio</h2>
                <ul>
                    <li>Preparación de pedidos: Podemos demorar hasta 24hs hábiles en la preparación y despacho de pedidos.</li>
                    <li>Tiempos de entrega: Los tiempos de entrega aplican una vez preparado y despachado el pedido.</li>
                    <li>CABA y GBA Norte: Una vez despachado el pedido, las entregas se realizan en un tiempo de 24 a 48 horas hábiles.</li>
                    <li>GBA Sur, Oeste y La Plata: Una vez despachado el pedido, las entregas tienen una demora de 48 a 72hs hábiles.</li>
                    <li>Interior: Los tiempos estimado de entrega son de 3 días hábiles para ciudades principales y hasta 7 días hábiles para localidades remotas o de baja población.</li>
                    <li>Tierra del Fuego: Los envíos a Tierra del Fuego tienen un plazo de hasta 15 días hábiles.</li>
                </ul>
            </div>
            <div>
                <h2>Tienda online</h2>
                <ul>
                    <li>Nuestra Tienda Online está habilitada para recibir compras únicamente con pagos online.</li>
                    <li>Cambios: El plazo para realizar cambios es de 30 días.</li>
                </ul>
            </div>
            <div >
                <h2>Pago</h2>
                <ul>
                    <li>¿Cuáles son los medios de pago disponibles?</li>
                    <h5>Podés pagar tu compra en forma segura a través de MercadoPago.</h5>
                    <li>¿Realizan envíos a Tierra del Fuego?</li>
                    <h5>Realizamos envíos a Tierra del Fuego a través de OCA.</h5>
                    <li>¿Se puede recibir el pedido en una dirección diferente a la registrada?</li>
                    <h5>Podés cargar el domicilio de entrega durante el proceso de compra en el checkout.</h5>
                
                 
                </ul>
            </div>
           
        </div>
    );
}

export default FAQ;
