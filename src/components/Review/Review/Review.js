import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getClientReview`)
            .then(res => res.json())
            .then(data => {
                setFeedback(data);
            })
    }, [])
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <h3 className='mb-4 '>Client All Feedback</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {feedback.length === 0 && <h4 className='text-center m-auto'>Loding.....</h4>}
                    {feedback.map((feedback, index) => <ReviewDetail key={index} feedback={feedback} />)}
                </div>
            </div>
        </div>
    );
};

export default Review;