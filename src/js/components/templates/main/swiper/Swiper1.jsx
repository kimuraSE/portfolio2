import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,EffectFade,Autoplay} from 'swiper';

import 'swiper/css';
import "swiper/css/effect-fade";

import "swiper/css/pagination";

import img1 from "../../../../../imges/Swiper1/img1.jpg";
import img2 from "../../../../../imges/Swiper1/img2.jpg";
import img3 from "../../../../../imges/Swiper1/img3.jpg";


export const Swiper1 = () => {

    return (
        <div className='swiper1-box'>

            <Swiper
                modules={[EffectFade, Pagination,Autoplay]}
                effect={"fade"}
                spaceBetween={50}
                slidesPerView={1}
                speed={1000}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <div className='swiper-cover'></div>
                    <div className='fashionable'>Fashionable</div>
                    <img src={img1} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <div className='swiper-cover'></div>
                    <div className='cool'>Cool</div>
                    <img src={img2} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <div className='swiper-cover'></div>
                    <div className='classy'>Classy</div>
                    <img src={img3} alt="" />
                </SwiperSlide>

            </Swiper>

        </div>

    )
}
