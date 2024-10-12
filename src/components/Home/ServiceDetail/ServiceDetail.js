import React from 'react';
import './ServiceDetail.css';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    const { description, title, image, _id } = service;
    return (
        <div className="col">
            <div className="card box-shadow service-card-hover border-0 text-center  py-5 h-100">
                <img style={{width: '100px', margin: '0 auto'}} src={`data:image/png;base64,${image.img}`} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to={`/services/${_id}`}><button className='btn btn-success fw-bold'>Hire Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;