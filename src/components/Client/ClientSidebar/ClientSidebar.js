import React from 'react';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faMessage, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ClientSidebar = () => {
    return (
        <div className='shadow' style={{height: '90vh'}}>
            <ul className="navbar-nav d-flex align-items-center text-left ms-auto mb-2 mb-lg-0">
                <li className="nav-item mt-3 mb-4">
                    <Link to={'/client/order'} className='nav-link fw-bold text-body-tertiary mx-3' ><img src={logo} style={{ width: '150px' }} className='img-fluid' alt="" /></Link>
                </li>
                <li className="nav-item my-1">
                    <Link to={'/client/order'} className='nav-link fw-bold text-body-tertiary mx-3' ><FontAwesomeIcon className='me-2 text-dark' icon={faShoppingCart} /> Order</Link>
                </li>
                <li className="nav-item my-1">
                    <Link to={'/client/serviceList'} className='nav-link fw-bold text-body-tertiary mx-3' ><FontAwesomeIcon className='me-2 text-dark' icon={faList} /> Service List</Link>
                </li>
                <li className="nav-item my-1">
                    <Link to={'/client/review'} className='nav-link fw-bold text-body-tertiary mx-3' ><FontAwesomeIcon className='me-2 text-dark' icon={faMessage} /> Review</Link>
                </li>
            </ul>
        </div>
    );
};

export default ClientSidebar;