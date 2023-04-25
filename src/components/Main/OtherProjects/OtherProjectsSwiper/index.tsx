"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./OtherProjectsSwiper.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

type Props = {};

const OtherProjectsSwiper = (props: Props) => {
  return (
    <Swiper
      loop={true}
      pagination={true}
      navigation={{}}
      allowTouchMove={false}
      centeredSlides={true}
      slidesPerView={3}
      spaceBetween={24}
      className="h-full"
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide className={``}>
        <div className=" flex items-center justify-center   h-full">
          Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide className={``}>
        <div className="flex items-center justify-center   h-full">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide className={``}>
        <div className="flex items-center justify-center   h-full">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide className={``}>
        <div className="flex items-center justify-center   h-full">Slide 4</div>
      </SwiperSlide>
      <SwiperSlide className={``}>
        <div className="flex items-center justify-center   h-full">Slide 5</div>
      </SwiperSlide>
    </Swiper>
  );
};

export default OtherProjectsSwiper;
