import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});

    const handleOnBlur = (event) => {
        let newAdmin = { ...admin };
        newAdmin[event.target.name] = event.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/newAdmin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: admin.email, password: admin.password })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('New Admin added successfully');
                    window.location.reload();
                }
            })
    }

    return (
        <div>
            <Navbar />
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-6">
                    <form className='mt-4 shadow ps-4 border rounded px-2  py-3' onSubmit={handleSubmit}>
                        <h3 className='me-5 mb-4'>Make Admin</h3>
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

export default MakeAdmin;