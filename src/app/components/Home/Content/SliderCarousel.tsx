"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { MUIBox } from "@/app/components/MUI";
import styled from "styled-components";
import CarouselContainerShipPlane from "@/public/images/slider/carousel-container-cargo-ship-cargo-plane-3d.jpg";
import CarouselContainerShip from "@/public/images/slider/carousel-container-cargo-ship-cargo-plane.jpg";
import CarouselShipFly from "@/public/images/slider/carousel-container-ship-flying-plan-car-van-truck.jpg";
import CarouselTrainTrack from "@/public/images/slider/carousel-train-track-with-blue-container-top.jpg";
import CarouselTransportation from "@/public/images/slider/carousel-transportation-logistics.jpg";
import ImageSvg from "react-inlinesvg";

const SliderCarouselStyled = styled("div")`
   width: 100%;
   height: 100vh;
   margin-top: 10%;
   display: flex;
   align-items: center;

   .swiper-wrapper {
      width: 100vw;
   }
   .swiper-slide {
      position: relative;
      overflow: hidden;
   }
   .swiper-slide .bg-hover:hover {
      transform: scale(1.05);
   }

   .custom-nav {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   .custom-prev {
      position: absolute;
      left: 30px;
   }
   .custom-next {
      position: absolute;
      right: 30px;
   }
`;

const dataCarousel = [
   {
      image: CarouselContainerShipPlane,
   },
   {
      image: CarouselContainerShip,
   },
   {
      image: CarouselTrainTrack,
   },
   {
      image: CarouselShipFly,
   },
   {
      image: CarouselTransportation,
   },
];

const SliderCarousel = () => {
   return (
      <SliderCarouselStyled>
         <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            loop={true}
            grabCursor={true}
            slidesPerView={2}
            spaceBetween={170}
            centeredSlides={true}
            initialSlide={2}
            // navigation={true}
            navigation={{
               nextEl: ".custom-next",
               prevEl: ".custom-prev",
            }}
            speed={600}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 2,
               slideShadows: true,
            }}
            style={{ position: "relative", height: "352px" }}
         >
            {dataCarousel.map((item, index) => (
               <SwiperSlide key={index}>
                  <MUIBox
                     className="bg-hover"
                     sx={{
                        backgroundImage: `url(${item?.image.src})`,
                        height: "352px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "1",
                        width: "100%",
                        transition: "transform 0.3s ease",
                     }}
                  ></MUIBox>
               </SwiperSlide>
            ))}
            <MUIBox className="custom-nav">
               <MUIBox className="custom-prev" sx={{ cursor: "pointer", color: "#fff", width: "60px" }}>
                  <ImageSvg src="/images/icons/ArrowBackRoundedIcon.svg" />
               </MUIBox>
               <MUIBox className="custom-next" sx={{ cursor: "pointer", color: "#fff", width: "60px" }}>
                  <ImageSvg src="/images/icons/ArrowForwardRoundedIcon.svg" />
               </MUIBox>
            </MUIBox>
         </Swiper>
      </SliderCarouselStyled>
   );
};

export default SliderCarousel;
