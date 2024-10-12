import React from 'react';
import './ClientFeedbackDetail.css';

const ClientFeedbackDetail = ({ feedback }) => {
    return (
        <div className="col">
            <div className="card  shadow mb-5 border-0  h-100">
                <div className="row   pt-3 ps-2">
                    <div className="col-4">
                        <img src={`data:image/png;base64,${feedback.image.img}`} className='img-fluid p-1' alt={'Customer'} />
                    </div>
                    <div className="col-8">
                        <h4>{feedback.name}</h4>
                        <h6>{feedback.title}</h6>
                    </div>
                </div>
                <div className="card-body">
                    <p className='text-secondary'>{feedback.message}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedbackDetail;