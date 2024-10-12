import React from 'react';
import frame from '../../../images/Frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className='headerMain-container '>
            <div className="container">
                <div className="row d-flex align-items-center p-5 headerMain-row" >
                    <div className="col-md-4 offset-md-1">
                        <h1>Let's Grow Your <br /> Brand To The <br /> Next Lavel</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, accusamus. Accusantium veniam, nemo repellat neque magni accusamus rem autem dolor!</p>
                        <button className='btn btn-dark fw-bold text-light'>Hire Us</button>
                    </div>
                    <div className="col-md-6">
                        <img src={frame} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;