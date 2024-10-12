import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import ClientSidebar from '../ClientSidebar/ClientSidebar';
import { MyContext } from '../../../App';

const ClientOrder = () => {
    const { serviceId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [orderService, setOrderService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getOrderService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify({ serviceId }),
        })
            .then(res => res.json())
            .then(data => {
                setOrderService(data[0]);
            })
    }, [])


    const handleBlur = (event) => {
        let newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const handleChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('serviceName', info.serviceName);
        formData.append('projectDetail', info.projectDetail);
        formData.append('price', info.price);
        formData.append('status', 'pending')

        fetch(`http://localhost:5000/addNewClientService`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
               if(data){
                alert('Successfully added')
               }
            })

    }

    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-md-2">
                    <ClientSidebar />
                </div>
                <div className="col-md-6 ms-4">
                    <h3 className='my-4'>Order</h3>
                    <form className='border shadow rounded py-4  px-3' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input onBlur={handleBlur} style={{ height: '50px' }} type="text" name='name' className="form-control " placeholder='Name / Company name' required />
                        </div>
                        <div className="mb-3">
                            <input onBlur={handleBlur} style={{ height: '50px' }} type="email" defaultValue={loggedInUser.email} name='email' className="form-control " placeholder='Your Email Address' required />
                        </div>
                        <div className="mb-3">
                            <input onBlur={handleBlur} style={{ height: '50px' }} type="text"  name='serviceName' className="form-control " placeholder='Service name' required />
                        </div>
                        <div className="mb-3">
                            <textarea style={{height: '100px'}} onBlur={handleBlur} type="text" name='projectDetail' className="form-control " placeholder='Project Detail' required />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <input onBlur={handleBlur} type="text" name='price' className="form-control " placeholder='Price' required />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-4">
                                    <input onChange={handleChange} type="file" name='file' className="form-control" />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success fw-bold">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClientOrder;