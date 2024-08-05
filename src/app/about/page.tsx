"use client"
import { MUIBox, MUIGrid } from "../components/MUI"
// import {style, FONT_FAMILY} from '@/app/config'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Navigation } from "swiper/modules";

import ImageSvg from "react-inlinesvg";
import styled from "styled-components";
import CardSlide1 from "@/public/images/slider/aerial-view-top.jpg"
import CardSlide2 from "@/public/images/self-driving-futuristic-freight-truck-deliver-goods-warehouse-city-highway-1000x1000.jpg"
import CardSlide3 from "@/public/images/cargo-ship-carrying-containers-export-import-is-shown-global-world-service-freight-1000x1000.jpg"

import dynamic from "next/dynamic";
const SplittingText = dynamic(() => import("@/app/components/Home/Content/SplittingText"),{ssr: false})

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

const About = () => {
    return (
        <SliderCarouselStyled>
        <MUIBox className="container mx-auto">
            <MUIGrid container>
                <MUIGrid item md={7} xs={12}>
                    <SplittingText props={['Why','Choose','Us']} />
                </MUIGrid>
                <MUIGrid item md={5} xs={12}>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Navigation]}
                        className="mySwiper"
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                         }}
                         autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                         }}
                        coverflowEffect={{
                            rotate: 0,
                            slideShadows: false,
                        }}
                        creativeEffect= {{
                            prev: {
                              // will set `translateZ(-400px)` on previous slides
                              translate: [0, 0, -400],
                            },
                            next: {
                              // will set `translateX(100%)` on next slides
                              translate: ['100%', 0, 0],
                            },
                          }}
                    >
                        <SwiperSlide>
                            <MUIBox
                                sx={{
                                    backgroundImage: `url(${CardSlide1.src})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: "1",
                                    width: "100%",
                                    height: "400px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MUIBox
                                sx={{
                                    backgroundImage: `url(${CardSlide2.src})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: "1",
                                    width: "100%",
                                    height: "400px",
                                }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MUIBox
                                sx={{
                                    backgroundImage: `url(${CardSlide3.src})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: "1",
                                    maxWidth: '100%',
                                    height: "400px",
                            }}
                            />
                        </SwiperSlide>
                    </Swiper>
                    <MUIBox className="custom-nav">
                    <MUIBox className="custom-prev" sx={{ cursor: "pointer", color: "#fff", width: "60px" }}>
                        <ImageSvg src="/images/icons/ArrowBackRoundedIcon.svg" />
                    </MUIBox>
                    <MUIBox className="custom-next" sx={{ cursor: "pointer", color: "#fff", width: "60px" }}>
                        <ImageSvg src="/images/icons/ArrowForwardRoundedIcon.svg" />
                    </MUIBox>
                    </MUIBox>
                </MUIGrid>
            </MUIGrid>
        </MUIBox>  
        </SliderCarouselStyled> 
    )
}

export default About