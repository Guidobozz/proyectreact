import React from 'react';
import Swal from 'sweetalert2';

const Contacto = () => {

    const handleEnviarClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
            text: '¡Gracias por contactarnos!',
        });
    }

    return (
        <div style={{ marginLeft: '20px' }}>
            <h3>Escribinos !</h3>
            <form>
            <div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
                </div>
                <div className="form-group">
                    <label htmlFor="correo">Correo electrónico</label>
                    <input type="email" className="form-control" id="correo" placeholder="Ingrese su correo electrónico" />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Número de teléfono</label>
                    <input type="tel" className="form-control" id="telefono" placeholder="Ingrese su número de teléfono" />
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">¿Qué tienes en mente?</label>
                    <textarea className="form-control" id="mensaje" rows="3" placeholder="Cuéntenos qué tiene en mente"></textarea>
                </div>
                <button type="button" onClick={handleEnviarClick} className="btn btn-danger">Enviar</button>
            </div>

            </form>
        </div>
    );
}

export default Contacto;
