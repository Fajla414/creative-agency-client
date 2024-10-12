import React from 'react';
import './SlideImage.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const SlideImage = () => {
    return (
        <div className=' slideImage-container'>
            <div className="container">
                <h1 className='text-light text-center pt-4'>Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
                <div className="row mt-5">
                    <Swiper spaceBetween={30} slidesPerView={2.5} pagination={{ clickable: true, }} autoplay={{
                        delay: 2500, disableOnInteraction: false,
                    }} loop={true} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper" >
                        <SwiperSlide><img src={carousel1} className='img-fluid' alt="" /></SwiperSlide>
                        <SwiperSlide><img src={carousel2} className='img-fluid' alt="" /></SwiperSlide>
                        <SwiperSlide><img src={carousel4} className='img-fluid' alt="" /></SwiperSlide>
                        <SwiperSlide><img src={carousel5} className='img-fluid' alt="" /></SwiperSlide>
                        <SwiperSlide><img src={carousel2} className='img-fluid' alt="" /></SwiperSlide>
                        <SwiperSlide><img src={carousel1} className='img-fluid' alt="" /></SwiperSlide>
                        <SwiperSlide><img src={carousel4} className='img-fluid' alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SlideImage;