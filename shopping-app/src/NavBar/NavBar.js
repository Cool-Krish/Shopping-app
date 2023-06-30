
import './style.css'
import { Link } from 'react-router-dom';
function Navbar(prop){

    return<>
    <div className="nav">
        <div className="logo">
            <img src={prop.image} alt="" />
            <h2>My Shopping App</h2>
        </div>
        <div className="menu">
            <Link to='/' className="submenu">HOME</Link>
            <Link to = 'products' className="submenu">Products</Link>
            <Link to='cart' className="submenu">Add to Cart</Link>
            <Link className="submenu">about</Link>
        </div>

    </div>

    
    </>
}
export default Navbar;