import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';


const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

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
        formData.append("file", file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch(`http://localhost:5000/addService`, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
              if(data){
                alert('Service added successfully');
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
                <div className="col-md-9">
                    <h3 className='me-5 mt-4'>Add Service</h3>

                    <form className='mt-5 shadow ps-4 border rounded' onSubmit={handleSubmit}>
                        <div className="row px-2  py-3">
                            <div className="col-md-7">
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input type="text" placeholder='Title' name='title' className="form-control " required onBlur={handleBlur} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea name="description" placeholder='Description' className='form-control' required onBlur={handleBlur} />
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-md-5">
                                <div className="mb-3">
                                    <label className="form-label">Icon</label>
                                    <input type="file" name='file' className="form-control" required onChange={handleChange} />
                                </div>
                            </div>



                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddService;