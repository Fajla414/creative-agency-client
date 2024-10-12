import React from 'react';

const ClientServiceShortList = ({ service }) => {
    const { image, projectDetail, serviceName, status } = service;
    let statusBackgroundColor;
    if (status === 'pending') {
        statusBackgroundColor = 'danger';
    }
    if (status === 'on going') {
        statusBackgroundColor = 'warning';
    }
    if (status === 'done') {
        statusBackgroundColor = 'success';
    }
    return (
        <div className="col">
            <div className="card border-0 shadow h-100">
                <div className="row  d-flex ps-3 pt-3 align-items-center justify-content-between">
                    <div className='col'>
                        <img src={`data:image/png;base64,${image.img}`} style={{ width: '50px' }} className="card-img-top img-fluid" alt="..." />
                    </div >
                    <div className='col'>
                        <button className={`btn btn-${statusBackgroundColor}`} disabled>{status}</button>
                    </div>
                </div>
                <div className="card-body px-3">
                    <h5 className="card-title">{serviceName}</h5>
                    <p className="card-text">{projectDetail}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientServiceShortList;