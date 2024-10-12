import React from 'react';

const AdminServiceShortList = ({ order,index, handleOrderStatusChange }) => {
    const orderStatus = order.status;
    let orderStatusbg;
    if(orderStatus === 'done'){
        orderStatusbg = 'btn btn-outline-success';
    }
    if(orderStatus === 'on going'){
        orderStatusbg = 'btn btn-outline-warning';
    }
    if(orderStatus === 'pending'){
        orderStatusbg = 'btn btn-outline-danger';
    }
    return (
        <> <tr>
            <td>{index + 1}</td>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.serviceName}</td>
            <td>{order.projectDetail}</td>
            <td >
                <select onChange={(event) => handleOrderStatusChange(event, order)} name='status' className={`form-control  text-center ${orderStatusbg}`}>
                    <option  value={`${order.status}`}>{order.status}</option>
                    <option value="on going">on going</option>
                    <option value="done">done</option>
                </select>
            </td>
        </tr>
        </>
    );
};

export default AdminServiceShortList;