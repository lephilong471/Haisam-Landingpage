import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade, Parallax } from "swiper/modules";
import { MUIBox, MUITypography } from "@/app/components/MUI";
import styled from "styled-components";
import CarouselManagerAI from "@/public/images/slider/manager-engineer-checking-ai.jpg";
import CarouselManager from "@/public/images/slider/manager-engineer-checking.jpg";
import CarouselShipViewTop from "@/public/images/slider/aerial-view-top.jpg";
import CarouselTruck from "@/public/images/slider/truck.jpg";
import CarouselFuturistic from "@/public/images/slider/futuristic-truck.jpg";
import CarouselGlobal from "@/public/images/slider/global-logistic-airplane.jpg";
import ImageSvg from "react-inlinesvg";
import Image from "next/image";
import { FONT_FAMILY } from "@/app/config";
import Link from "next/link";
import AOS from "aos";

const SliderProjectStyled = styled("div")`
   width: 100%;
   height: 100%;
   overflow: hidden;
`;

const dataCarousel = [
   {
      image: CarouselManager,
      title: "Global Reach",
      path: "",
   },
   {
      image: CarouselManagerAI,
      title: "Supply Chain",
      path: "",
   },
   {
      image: CarouselShipViewTop,
      title: "Transportation Efficiency",
      path: "",
   },
   {
      image: CarouselTruck,
      title: "Inventory Control",
      path: "",
   },
   {
      image: CarouselGlobal,
      title: "Movon Logistics",
      path: "",
   },
   {
      image: CarouselFuturistic,
      title: "Cross-Border Trade",
      path: "",
   },
];

const SliderProject = () => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <SliderProjectStyled //
         data-aos="fade-up"
         data-aos-delay="0"
         data-aos-duration="2000"
         data-aos-once="true"
      >
         <Swiper
            modules={[Pagination, Navigation, Autoplay, EffectFade, Parallax]}
            direction={"vertical"}
            // navigation={true}
            // navigation={{
            //    nextEl: ".custom-next",
            //    prevEl: ".custom-prev",
            // }}
            effect="fade"
            parallax={true}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            pagination={{
               clickable: true,
            }}
            style={{ height: "506px" }}
         >
            {dataCarousel.map((item, index) => (
               <SwiperSlide key={index} style={{ position: "relative" }}>
                  <MUIBox
                     sx={{
                        backgroundImage: `url(${item?.image.src})`,
                        height: "506px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "-1",
                        width: "calc(100% + 50px)",
                        position: "absolute",
                        filter: "blur(8px)",
                     }}
                  ></MUIBox>

                  <MUIBox
                     sx={{
                        backgroundImage: `url(${item?.image.src})`,
                        height: "506px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        zIndex: "1",
                        width: "100%",
                        position: "absolute",
                        left: "20%",
                        top: "clamp(5.625rem, 8vw, 6.875rem)",
                        overflow: "hidden",
                        objectFit: "cover",
                     }}
                  ></MUIBox>

                  <MUIBox
                     sx={{
                        position: "absolute",
                        margin: "0 clamp(1.875rem, 15vw, 11.25rem)",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        zIndex: "10",
                        color: "#fff",
                     }}
                  >
                     <MUIBox>
                        <MUITypography
                           data-swiper-parallax-y="-50"
                           data-swiper-opacity="0"
                           data-swiper-translate="-50px"
                           textTransform={"capitalize"}
                           fontSize={65}
                           fontWeight={700}
                           fontFamily={FONT_FAMILY.OUTFIT}
                           pb={4}
                        >
                           {item.title}
                        </MUITypography>
                        <MUIBox
                           data-swiper-parallax-y="-100"
                           data-swiper-opacity="0"
                           data-swiper-translate="50px"
                           sx={{
                              border: "1.6px solid #fff",
                              py: 1.5,
                              px: 4,
                              display: "inline-block",
                              borderRadius: "40px",
                           }}
                        >
                           <Link href={"#"}>
                              <MUITypography
                                 fontSize={15}
                                 fontWeight={400}
                                 fontFamily={FONT_FAMILY.OUTFIT}
                                 textTransform={"uppercase"}
                                 lineHeight={1}
                                 color={"#fff"}
                                 sx={{
                                    lineSpacing: "1.2px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                 }}
                              >
                                 View project
                                 <ImageSvg src="/images/icons/ArrowForwardRoundedIcon.svg" style={{ width: "20px" }} />
                              </MUITypography>
                           </Link>
                        </MUIBox>
                     </MUIBox>
                  </MUIBox>
                  {/* <Image
                     src="/images/slider/global-logistic-airplane.jpg"
                     width={1920}
                     height={506}
                     alt=""
                     style={{ width: "100%", height: "506px", zIndex: "-2" }}
                  /> */}
               </SwiperSlide>
            ))}
         </Swiper>
      </SliderProjectStyled>
   );
};

export default SliderProject;
