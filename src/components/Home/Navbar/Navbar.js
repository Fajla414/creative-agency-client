import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Navbar.css';
import { MyContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link to={'/'}><img src={logo} className='img-fluid' alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/home'} className='nav-link fw-bold text-body-tertiary mx-3' >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/porfolio'} className='nav-link fw-bold text-body-tertiary mx-3' >Porfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/team'} className='nav-link fw-bold text-body-tertiary mx-3' >Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/reviews'} className='nav-link fw-bold text-body-tertiary mx-3' >Reviews</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className='nav-link fw-bold text-body-tertiary mx-3' >Contact</Link>
                        </li>
                        {loggedInUser.email ? <li className="nav-item">
                            <Link to={'/profile'} className='nav-link fw-bold text-body-tertiary mx-3' ><img style={{borderRadius: '50%', width: '40px'}} src={loggedInUser.photo} className='img-fluid' alt="" /></Link>
                        </li> : <>
                            <li className="nav-item">
                                <Link to={'/login'} className='nav-link text-light  mx-3' ><button className='btn  fw-bold btn-dark'>Login</button></Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/admin'} className='nav-link text-light  mx-3' ><button className='btn  fw-bold btn-outline-dark'>Admin</button></Link>
                            </li>
                        </>}

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;