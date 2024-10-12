import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Service.css';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/getService`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className='container service-container'>
                            <h3 className='text-center'>Provide awesome <span style={{color: '#7AB259'}}>services</span></h3>
            <div className="row row-cols-1 row-cols-md-3 mt-5 g-4">
                {
                    service.map(service => <ServiceDetail key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Service;