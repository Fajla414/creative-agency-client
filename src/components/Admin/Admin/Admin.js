import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
    const [verifyAdmin, setVerifyAdmin] = useState({});

    const handleOnBlur = (event) => {
        let checkAdmin = { ...verifyAdmin };
        checkAdmin[event.target.name] = event.target.value;
        setVerifyAdmin(checkAdmin);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/verifyAdmin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: verifyAdmin.email, password: verifyAdmin.password })
        })
            .then(res => res.json())
            .then(data => {
              if(data){
                alert('Admin verified successfully');
               navigate(`/admin/serviceList`);
              }
            })
    }

    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-md-6 m-auto">
                    <h4 className='mt-4'>Verify you'r admin or not !!!</h4>
                    <form className='mt-4 shadow ps-4 border rounded px-2  py-3' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input onBlur={handleOnBlur} type="email" name='email' placeholder='Enter email...' className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input onBlur={handleOnBlur} type="password" name='password' placeholder='Password' className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;