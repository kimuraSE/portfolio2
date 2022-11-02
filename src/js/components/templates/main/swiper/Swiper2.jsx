import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper';

import 'swiper/css';


import img1 from "../../../../../imges/Swiper2/img1.jpg";
import img2 from "../../../../../imges/Swiper2/img2.jpg";
import img3 from "../../../../../imges/Swiper2/img3.jpg";

export const Swiper2= () => {
    return (

        <div className='swiper2-box'>

            <div>Products</div>

            <Swiper
                slidesPerView={3}
                speed={2000}
                autoplay={{
                    delay:500,
                    disableOnInteraction:false
                }}
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className='swiper-cover'></div>
                    <img src={img1} alt="" />
                    <div>shoes</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='swiper-cover'></div>
                <img src={img2} alt="" />
                <div>pants</div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='swiper-cover'></div>
                <img src={img3} alt="" />
                <div>accessories</div>
                </SwiperSlide>
                
            </Swiper>

            <div className='Products-Index'>Products Index</div>


        </div>

    );
};