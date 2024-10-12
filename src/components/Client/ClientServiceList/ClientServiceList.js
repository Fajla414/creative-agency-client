import React, { useContext, useEffect, useState } from 'react';
import ClientSidebar from '../ClientSidebar/ClientSidebar';
import Navbar from '../../Home/Navbar/Navbar';
import ClientServiceShortList from '../ClientServiceShortList/ClientServiceShortList';
import { MyContext } from '../../../App';

const ClientServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [clientServiceList, setClientServiceList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getClientServiceList?email=${loggedInUser.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setClientServiceList(data);
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
                    <h3 className='my-4'>ServiceList</h3>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            clientServiceList.map((service, index) => <ClientServiceShortList key={index} service={service} />)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ClientServiceList;