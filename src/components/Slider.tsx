import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.css';

export default function Slider() {
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        <SwiperSlide><img src={require('../images/vorschau_vorne.jpg')} /></SwiperSlide>
        {/* <SwiperSlide><img src={require('../images/vorschau_hinten.jpg')} /></SwiperSlide>
        <SwiperSlide><img src={require('../images/vorschau_neck.jpg')} /></SwiperSlide>
        <SwiperSlide><img src={require('../images/vorschau_shirt.jpg')} /></SwiperSlide> */}
        {/* <SwiperSlide>1</SwiperSlide> */}
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
      </Swiper>
    </div>
  )
}
