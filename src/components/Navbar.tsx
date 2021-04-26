import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Link to='/' className='navbar-brand'>Shopsy</Link>
            
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <Link to='/' className='nav-link'>Home</Link>
                </div>
            </div>

            <div className="sh-cart-icon">
                <div className="navbar-nav">
                    <Link to='/cart' className="nav-link">
                        Cart
                    </Link>
                </div>
            </div>
    </nav>
    );
};

export default Navbar;