import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className='sidebar-container shadow'>
            <ul className="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
                <li className="nav-item mt-3 mb-4">
                    <Link to={'/admin/serviceList'} className='nav-link fw-bold text-body-tertiary mx-3' ><img src={logo} style={{width: '150px'}} className='img-fluid' alt="" /></Link>
                </li>
                <li className="nav-item my-1">
                    <Link to={'/admin/serviceList'} className='nav-link fw-bold text-body-tertiary mx-3' ><FontAwesomeIcon className='me-2 text-dark' icon={faList}/> Service List</Link>
                </li>
                <li className="nav-item my-1">
                    <Link to={'/admin/addSevice'} className='nav-link fw-bold text-body-tertiary mx-3' ><FontAwesomeIcon className='me-2 text-dark' icon={faPlus}/> Add Service</Link>
                </li>
                <li className="nav-item my-1">
                    <Link to={'/admin/makeAdmin'} className='nav-link fw-bold text-body-tertiary mx-3' ><FontAwesomeIcon className='me-2 text-dark' icon={faUserPlus} /> Make Admin</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;