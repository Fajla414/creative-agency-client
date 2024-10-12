import React, { useEffect, useState } from 'react';
import ClientFeedbackDetail from '../ClientFeedbackDetail/ClientFeedbackDetail';
import './ClientFeedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ClientFeedback = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getClientReview`)
            .then(res => res.json())
            .then(data => {
                setFeedback(data);
            })
    }, [])

    const sliceFeedback = feedback.slice(0, 5)

    return (
        <div className='container clientFeedback-container'>
            <h2 className='text-center'>Client <span style={{ color: '#7AB259' }}>Feedback</span></h2>
            <div className="row row-cols-1 row-cols-md-3 mt-5 g-4">
                {
                    feedback.length > 5 ? sliceFeedback.map((feedback, index) => <ClientFeedbackDetail key={index} feedback={feedback} />) :
                        feedback.map((feedback, index) => <ClientFeedbackDetail key={index} feedback={feedback} />)
                }
                {
                    feedback.length > 5 && <div className="col" >
                        <Link to={'/reviews'} className='text-decoration-none'>
                            <div className="card d-flex more-review  align-items-center  h-100">
                                <div className='mt-5'>
                                    <FontAwesomeIcon className='fs-2' icon={faPlus} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">See more</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ClientFeedback;