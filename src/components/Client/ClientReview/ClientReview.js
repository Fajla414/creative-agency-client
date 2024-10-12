import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ClientSidebar from '../ClientSidebar/ClientSidebar';

const ClientReview = () => {
    const [reviewInfo, setReviewInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (event) => {
        let newReviewInfo = { ...reviewInfo };
        newReviewInfo[event.target.name] = event.target.value;
        setReviewInfo(newReviewInfo);
    }
    const handleChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile)
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', reviewInfo.name);
        formData.append('title', reviewInfo.title)
        formData.append('message', reviewInfo.message);
        formData.append('file', file);

        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            body: formData,
        })
           .then(res => res.json())
           .then(data => {
                if (data) {
                    alert('Review submitted successfully');
                    setReviewInfo({});
                    setFile(null);
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
                <div className="col-md-9 mt-4">
                    <form className='border shadow rounded pt-4 pb-5  ps-5 pe-3' onSubmit={handleSubmit}>
                        <h3 className='mb-4'>Review</h3>
                        <div className="mb-3">
                            <input onBlur={handleBlur} style={{ height: '50px' }} type="text" name='name' className="form-control " placeholder='Name' required />
                        </div>
                        <div className="mb-3">
                            <input onBlur={handleBlur} style={{ height: '50px' }} type="text" name='title' className="form-control " placeholder='Title here..' required />
                        </div>
                        <div className="mb-3">
                            <input onBlur={handleBlur} style={{ height: '50px' }} type="text" name='message' className="form-control " placeholder='message' required />
                        </div>
                        <div className="mb-4">
                            <input onChange={handleChange} type="file" name='file' className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-success fw-bold">Send Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;