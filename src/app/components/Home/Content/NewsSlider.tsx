import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { MUIBox } from "@/app/components/MUI";

export default function NewsSlider() {
   return (
      <>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
         >
            <SwiperSlide>
               <MUIBox></MUIBox>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
         </Swiper>
      </>
   );
}
