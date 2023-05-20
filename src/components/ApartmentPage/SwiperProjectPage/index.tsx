import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/legacy/image";

export default function SwiperProjectPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="max-w-[900px] max-h-[700px] mb-5"
      >
        {Array(5)
          .fill(null)
          .map((item) => {
            return (
              <>
                <SwiperSlide className="max-w-[900px] max-h-[600px] ">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    alt="img1"
                    width={900}
                    height={600}
                    objectFit="cover"
                    className="rounded-2xl max-w-full max-h-full"
                  />
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
      <Swiper
        onSwiper={(swiper: any) => {
          setThumbsSwiper(swiper);
        }}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="min-h-[200px]"
      >
        {Array(5)
          .fill(null)
          .map((item) => {
            return (
              <>
                <SwiperSlide className="w-[205px]">
                  <Image
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    alt="img1"
                    width={205}
                    height={134}
                    className="rounded-md"
                  />
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
    </>
  );
}
