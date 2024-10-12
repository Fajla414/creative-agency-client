import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Footer.css';

const Footer = () => {
    const [contactInfo, setContactInfo] = useState({});
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const handleBlur = (event) =>{
        let info = {...contactInfo};
        info[event.target.name] = event.target.value;
        setContactInfo(info);
    }


    const onSubmit = (data) => console.log(data)

    return (
        <footer className='footer-container'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Let us handle your <br /> Project profesionally</h1><br />
                        <p className='pe-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius, omnis ipsum ab similique magni atque optio placeat. Cumque, tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius, omnis ipsum ab similique magni atque optio placeat. Cumque, tenetur</p>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input  className='form-control border-0 mb-3' style={{height: '45px'}} name='email' type='email' placeholder='Your Email Address' onBlur={handleBlur} {...register("email", { required: true })} />
                            {errors.email && <span className='text-danger'>This field is required</span>}

                            <input className='form-control border-0 mb-3'  style={{height: '45px'}} name='name/companyName' type='text' placeholder="Your name / company's name" onBlur={handleBlur} {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger'>This field is required</span>}

                            <textarea className='form-control border-0 mb-3' style={{height: '100px'}} name='message' type='text' placeholder="Your message..." onBlur={handleBlur} {...register("message", { required: true })} />
                            {errors.message && <span className='text-danger'>This field is required</span>}

                            <input type="submit" className='btn btn-primary fw-bold' />
                        </form>
                    </div>
                </div>
                <div className="row copyright">
                    <div className="col-4 m-auto fw-bold">Copyright Orange labs {new Date().getFullYear()}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;