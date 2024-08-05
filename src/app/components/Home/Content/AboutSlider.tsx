"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { MUIBox } from "@/app/components/MUI";
import styled from "styled-components";
import SliderManger from "@/public/images/slider/manager-engineer-checking.jpg";
import SliderContainerPlane from "@/public/images/slider/container-cargo-ship-cargo-plane.jpg";
import SliderShip from "@/public/images/slider/ship-with-cargo-container-sea.jpg";

const AboutSliderStyled = styled("div")`
   width: 100%;
`;
const AboutSlider = () => {
   return (
      <AboutSliderStyled>
         <Swiper
            modules={[EffectCards, Pagination, Navigation]}
            // spaceBetween={50}
            // slidesPerView={1}
            // autoplay={{
            //    delay: 5000,
            //    disableOnInteraction: false,
            // }}
            effect={"cards"}
            grabCursor={true}
            // cardsEffect={{
            //    perSlideRotate: 20,
            //    //  slideShadows: true,
            // }}
         >
            <SwiperSlide>
               <MUIBox
                  sx={{
                     backgroundImage: `url(${SliderManger.src})`,
                     height: "460px",

                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     zIndex: "1",
                     width: "90%",
                  }}
               ></MUIBox>
            </SwiperSlide>
            <SwiperSlide>
               <MUIBox
                  sx={{
                     backgroundImage: `url(${SliderShip.src})`,
                     height: "460px",

                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     zIndex: "1",
                     width: "90%",
                  }}
               ></MUIBox>
            </SwiperSlide>
            <SwiperSlide>
               <MUIBox
                  sx={{
                     backgroundImage: `url(${SliderContainerPlane.src})`,
                     height: "460px",

                     backgroundPosition: "center",
                     backgroundSize: "cover",
                     backgroundRepeat: "no-repeat",
                     zIndex: "1",
                     width: "90%",
                  }}
               ></MUIBox>
            </SwiperSlide>
         </Swiper>
      </AboutSliderStyled>
   );
};

export default AboutSlider;
