import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import './Slider.css';

export default function Slider({ shirts }: any) {
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        centeredSlides={true}
      >
        {shirts[0].images.map((element: any) =>
          <SwiperSlide><img src={element} alt={element} /></SwiperSlide>
        )}
      </Swiper>
    </div >
  )
}
