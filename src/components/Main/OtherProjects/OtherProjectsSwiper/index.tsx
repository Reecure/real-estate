import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        hashNavigation={true}
        navigation={{
          nextEl: "",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="min-h-[340px] overflow-x-hidden"
      >
        {Array(10)
          .fill(null)
          .map((item, i) => {
            return (
              <Link key={i} href="/">
                <SwiperSlide className="bg-slate-500 border-4 border-white rounded-lg text-black min-h-[300px]">
                  Slide {i}
                </SwiperSlide>
              </Link>
            );
          })}
      </Swiper>
    </>
  );
}
