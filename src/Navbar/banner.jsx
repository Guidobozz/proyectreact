import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Bann from '../assets/banner.png';

const Banner = () => {
    const location = useLocation();

    const isHomePage = () => {
        return location.pathname === '/';
    };

    if (!isHomePage()) {
        return null;
    }

    return (
        <div style={{ position: 'relative', textAlign: 'center', marginBottom: '20px' }}>
            <img src={Bann} alt="Banner" style={{ width: '100%' }} />
            {isHomePage() && (
                <Link to="/category/MLB" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: '1', backgroundColor: 'black', color: 'white', padding: '8px 16px', fontSize: '14px', borderRadius: '4px', border: 'none', textDecoration: 'none' }}>
                    Comprar
                </Link>
            )}
        </div>
    );
}

export default Banner;
