import React from 'react'
import { useEffect, useState } from 'react'
import './ImageSlider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function ImageSlider() {
    return (
        <>
        <div className='swiper-container'>
            <Swiper
                modules={[Autoplay, Navigation]}
                navigation
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{ delay: 30000 }}
            >
                <SwiperSlide><img src="https://res.cloudinary.com/dcijxubv9/image/upload/v1780067573/IMG_0217_cejajs.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dcijxubv9/image/upload/v1780442632/IMG_0223_tzbe2b.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://res.cloudinary.com/dcijxubv9/image/upload/v1780067573/IMG_0217_cejajs.jpg" /></SwiperSlide>
            </Swiper>
        </div>
        </>
    );
}

export default ImageSlider;
