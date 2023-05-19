import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SimilarListings from "@/components/AppartamentPage/ProductDescription/SimilarListings";

const SimilarListingSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={160}
        loop={true}
        className="max-h-[460px] h-full "
      >
        <SwiperSlide>
          <SimilarListings />
        </SwiperSlide>
        <SwiperSlide>
          <SimilarListings />
        </SwiperSlide>
        <SwiperSlide>
          <SimilarListings />
        </SwiperSlide>
        <SwiperSlide>
          <SimilarListings />
        </SwiperSlide>
        <SwiperSlide>
          <SimilarListings />
        </SwiperSlide>
        <SwiperSlide>
          <SimilarListings />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SimilarListingSwiper;
