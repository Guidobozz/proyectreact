import React from 'react';
import { Link } from 'react-router-dom'; 
import ig from '../assets/logoig.png';
import face from '../assets/logoface.png';
import './footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="/">Inicio</a></li>
                            <li className="list-inline-item"><Link to="/medios">Medios de pago</Link></li>
                            <li className="list-inline-item"><Link to="/cambio">Politicas de cambio</Link></li>
                            <li className="list-inline-item"><Link to="/faq">FAQ</Link></li>
                            <li className="list-inline-item"><Link to="/contacto">Contacto</Link></li>
                        </ul>
                        <hr className="divider" />
                        <p>&copy; 2024 Compañía, Inc.</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/neweracapargentina/"><img src={ig} alt="Instagram" style={{ width: '30px', height: '30px' }} /></a>
                        <a href="https://web.whatsapp.com/"><img src={face} alt="Facebook" style={{ width: '30px', height: '30px' }} /></a>
                     </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
