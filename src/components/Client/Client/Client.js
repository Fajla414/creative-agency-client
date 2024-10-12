import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import ClientSidebar from '../ClientSidebar/ClientSidebar';

const Client = () => {
    const [orderService, setOrderService] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch('http://localhost:5000/getOrderService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ serviceId }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrderService(data);
            })
    }, [])
    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-md-2">
                    <ClientSidebar />
                </div>
                <div className="col-md-9">
                    <h3>Service: {orderService.length}</h3>
                </div>
            </div>
        </div>
    );
};

export default Client;