import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Navbar/minav.css"
import "../Navbar/nav.css";

const Minav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/category/NBA" className="nav-link">NBA</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/MLB" className="nav-link">MLB</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/NFL" className="nav-link">NFL</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/NHL" className="nav-link">NHL</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}

export default Minav;
