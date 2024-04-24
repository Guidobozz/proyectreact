import Logo from '../assets/logopagina.png';
import Logodos from '../assets/logonewera.png';
import Carrito from '../Carrito/carrito';
import "../Navbar/nav.css";
import Banner from '../Navbar/banner'; 
import Minav from '../Navbar/minav';

const Navbar = () => {
     

    return (
        <nav>
           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={Logo} alt='' style={{ width: '30%', marginRight: '10px' }} />
                <img src={Logodos} alt='' style={{ width: '200px', height: '200px' }} />
            </div>
            <h1>Shop Sport Leagues</h1>
        </div>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <Minav></Minav>
                </div>
                <Carrito /> 
                <Banner />
            </div>
        </nav>
    );
}

export default Navbar;