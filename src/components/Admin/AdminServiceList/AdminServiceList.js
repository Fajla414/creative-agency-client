import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import AdminServiceShortList from '../AdminServiceShortList/AdminServiceShortList';

const AdminServiceList = () => {
    const [allClientOrder, setAllClientOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getAllClientOrder')
            .then(res => res.json())
            .then(data => {
                setAllClientOrder(data);
            })
    }, [])


    const handleOrderStatusChange = (event, client) => {
        const selectedStatusValue = event.target.value;
        const id = client._id;

        if (window.confirm('Are you sure you want to change the order status')) {
            fetch(`http://localhost:5000/updateOrderStatus/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: selectedStatusValue })
            })
                .then(res => res.json())
                .then(data => {
                    if(data){
                        alert('Order status updated successfully!');
                        window.location.reload();
                    }
                })
        }
    }


    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h3 className='my-4'>Service List</h3>
                    {allClientOrder.length ?
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">Sr NO</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project Detail</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                               {allClientOrder.map((order, index) => <AdminServiceShortList key={order._id} index={index} order={order} handleOrderStatusChange={handleOrderStatusChange}/>)}
                            </tbody>
                        </table>
                        :
                        <div>
                            <p className='text-center fw-bold mt-5'>Noting is order!!!!</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;