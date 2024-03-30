import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logopagina.png';
import Carrito from '../Carrito/carrito';

const Navbar = () => {
    return (
        <nav>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
            <img src={Logo} alt='' style={{ width: '40%' }} />
            <h1>Shop Sport Leagues</h1>
         </div>
        <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to="category/NBA" className="btn btn-primary mx-2">NBA</Link>
                <Link to="category/MLB" className="btn btn-primary mx-2">MLB</Link>
                <Link to="category/NFL" className="btn btn-primary mx-2">NFL</Link>
            </div>
            <Carrito></Carrito>
        </div>
    </nav>
    )
}

export default Navbar;