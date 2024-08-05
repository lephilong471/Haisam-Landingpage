"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import { MUIBox, MUITypography } from "@/app/components/MUI";
import { FONT_FAMILY, style } from "@/app/config";
import Link from "next/link";

export default function NewsSlider() {
   return (
      <>
         <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
               clickable: true,
               // type: "custom",
               // renderCustom(swiper, current, total) {
               //    let bullets = [];
               //    for (let i = 0; i < total; i++) {
               //       bullets.push(
               //          `<span class="${
               //             i === current - 1 ? "swiper-pagination-bullet-active" : "swiper-pagination-bullet"
               //          }"></span>`
               //       );
               //    }
               //    return bullets.join(" ");
               // },
            }}
            modules={[Pagination, Navigation]}
            navigation={{
               nextEl: ".custom-next",
               prevEl: ".custom-prev",
            }}
         >
            <SwiperSlide>
               <MUIBox>
                  <MUIBox
                     sx={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: "url(/images/news/trees-trucks.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                     }}
                  ></MUIBox>
                  <MUIBox sx={{ display: "flex", justifyContent: "start", alignItems: "center", pt: 3.5 }}>
                     <MUITypography
                        fontSize={17}
                        lineHeight={1.3}
                        color={style.TEXT_COLOR_GENERAL}
                        fontFamily={FONT_FAMILY.JOST}
                     >
                        May 18, 2023
                     </MUITypography>
                     <MUITypography mx={1} color={style.TEXT_COLOR_GENERAL} fontFamily={FONT_FAMILY.JOST}>
                        /
                     </MUITypography>
                     <MUITypography
                        fontSize={17}
                        lineHeight={1.3}
                        color={style.TEXT_COLOR_GENERAL}
                        fontFamily={FONT_FAMILY.JOST}
                     >
                        Insights
                     </MUITypography>
                  </MUIBox>
                  <MUIBox
                     sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        marginBottom: "35px",
                        ".title-link:hover a": {
                           color: "#111",
                        },
                     }}
                  >
                     <Link
                        href={"#"}
                        style={{ textDecoration: "none", display: "inline-block" }}
                        className="title-link"
                     >
                        <MUITypography
                           fontSize={22}
                           fontWeight={600}
                           fontFamily={FONT_FAMILY.OUTFIT}
                           color={style.TEXT_COLOR_GENERAL}
                           lineHeight={"2em"}
                           sx={{
                              width: "100%",
                              position: "relative",
                              display: "inline",
                              backgroundImage: "linear-gradient(transparent calc(100% - 2px), currentColor 2px)",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "0 100%",
                              color: style.TEXT_COLOR_GENERAL,
                              transition: "all .9s cubic-bezier(.32,.32,.15,1.17)",
                              ":hover": {
                                 backgroundSize: "100% 100%",
                              },
                           }}
                        >
                           E-commerce Boom and Warehousing Challenges
                        </MUITypography>
                     </Link>
                  </MUIBox>
               </MUIBox>
            </SwiperSlide>
            <SwiperSlide>
               <MUIBox>
                  <MUIBox
                     sx={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: "url(/images/news/trees-trucks.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                     }}
                  ></MUIBox>
                  <MUIBox sx={{ display: "flex", justifyContent: "start", alignItems: "center", pt: 3.5 }}>
                     <MUITypography
                        fontSize={17}
                        lineHeight={1.3}
                        color={style.TEXT_COLOR_GENERAL}
                        fontFamily={FONT_FAMILY.JOST}
                     >
                        May 18, 2023
                     </MUITypography>
                     <MUITypography mx={1} color={style.TEXT_COLOR_GENERAL} fontFamily={FONT_FAMILY.JOST}>
                        /
                     </MUITypography>
                     <MUITypography
                        fontSize={17}
                        lineHeight={1.3}
                        color={style.TEXT_COLOR_GENERAL}
                        fontFamily={FONT_FAMILY.JOST}
                     >
                        Insights
                     </MUITypography>
                  </MUIBox>
                  <MUIBox
                     sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        marginBottom: "35px",
                        ".title-link:hover a": {
                           color: "#111",
                        },
                     }}
                  >
                     <Link
                        href={"#"}
                        style={{ textDecoration: "none", display: "inline-block" }}
                        className="title-link"
                     >
                        <MUITypography
                           fontSize={22}
                           fontWeight={600}
                           fontFamily={FONT_FAMILY.OUTFIT}
                           color={style.TEXT_COLOR_GENERAL}
                           lineHeight={"2em"}
                           sx={{
                              width: "100%",
                              position: "relative",
                              display: "inline",
                              backgroundImage: "linear-gradient(transparent calc(100% - 2px), currentColor 2px)",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "0 100%",
                              color: style.TEXT_COLOR_GENERAL,
                              transition: "all .9s cubic-bezier(.32,.32,.15,1.17)",
                              ":hover": {
                                 backgroundSize: "100% 100%",
                              },
                           }}
                        >
                           E-commerce Boom and Warehousing Challenges
                        </MUITypography>
                     </Link>
                  </MUIBox>
               </MUIBox>
            </SwiperSlide>
            <SwiperSlide>
               <MUIBox>
                  <MUIBox
                     sx={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: "url(/images/news/trees-trucks.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                     }}
                  ></MUIBox>
                  <MUIBox sx={{ display: "flex", justifyContent: "start", alignItems: "center", pt: 3.5 }}>
                     <MUITypography
                        fontSize={17}
                        lineHeight={1.3}
                        color={style.TEXT_COLOR_GENERAL}
                        fontFamily={FONT_FAMILY.JOST}
                     >
                        May 18, 2023
                     </MUITypography>
                     <MUITypography mx={1} color={style.TEXT_COLOR_GENERAL} fontFamily={FONT_FAMILY.JOST}>
                        /
                     </MUITypography>
                     <MUITypography
                        fontSize={17}
                        lineHeight={1.3}
                        color={style.TEXT_COLOR_GENERAL}
                        fontFamily={FONT_FAMILY.JOST}
                     >
                        Insights
                     </MUITypography>
                  </MUIBox>
                  <MUIBox
                     sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        marginBottom: "35px",
                        ".title-link:hover a": {
                           color: "#111",
                        },
                     }}
                  >
                     <Link
                        href={"#"}
                        style={{ textDecoration: "none", display: "inline-block" }}
                        className="title-link"
                     >
                        <MUITypography
                           fontSize={22}
                           fontWeight={600}
                           fontFamily={FONT_FAMILY.OUTFIT}
                           color={style.TEXT_COLOR_GENERAL}
                           lineHeight={"2em"}
                           sx={{
                              width: "100%",
                              position: "relative",
                              display: "inline",
                              backgroundImage: "linear-gradient(transparent calc(100% - 2px), currentColor 2px)",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "0 100%",
                              color: style.TEXT_COLOR_GENERAL,
                              transition: "all .9s cubic-bezier(.32,.32,.15,1.17)",
                              ":hover": {
                                 backgroundSize: "100% 100%",
                              },
                           }}
                        >
                           E-commerce Boom and Warehousing Challenges
                        </MUITypography>
                     </Link>
                  </MUIBox>
               </MUIBox>
            </SwiperSlide>
            <SwiperSlide>
               <MUIBox>
                  <MUIBox
                     sx={{
                        width: "100%",
                        height: "200px",
                        backgroundImage: "url(/images/news/trees-trucks.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                     }}
                  ></MUIBox>
                  <MUIBox sx={{ display: "flex", justifyContent: "start", alignItems: "center", pt: 3.5 }}>
                     <MUITypography
                        fontSize={17}
                        lineHeight={1.3}
                        color={style.TEXT_COLOR_GENERAL}
                        fontFamily={FONT_FAMILY.JOST}
                     >
                        May 18, 2023
                     </MUITypography>
                     <MUITypography mx={1} color={style.TEXT_COLOR_GENERAL} fontFamily={FONT_FAMILY.JOST}>
                        /
                     </MUITypography>
                     <MUITypography
                        fontSize={17}
                        lineHeight={1.3}
                        color={style.TEXT_COLOR_GENERAL}
                        fontFamily={FONT_FAMILY.JOST}
                     >
                        Insights
                     </MUITypography>
                  </MUIBox>
                  <MUIBox
                     sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        marginBottom: "35px",
                        ".title-link:hover a": {
                           color: "#111",
                        },
                     }}
                  >
                     <Link
                        href={"#"}
                        style={{ textDecoration: "none", display: "inline-block" }}
                        className="title-link"
                     >
                        <MUITypography
                           fontSize={22}
                           fontWeight={600}
                           fontFamily={FONT_FAMILY.OUTFIT}
                           color={style.TEXT_COLOR_GENERAL}
                           lineHeight={"2em"}
                           sx={{
                              width: "100%",
                              position: "relative",
                              display: "inline",
                              backgroundImage: "linear-gradient(transparent calc(100% - 2px), currentColor 2px)",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "0 100%",
                              color: style.TEXT_COLOR_GENERAL,
                              transition: "all .9s cubic-bezier(.32,.32,.15,1.17)",
                              ":hover": {
                                 backgroundSize: "100% 100%",
                              },
                           }}
                        >
                           E-commerce Boom and Warehousing Challenges
                        </MUITypography>
                     </Link>
                  </MUIBox>
               </MUIBox>
            </SwiperSlide>
         </Swiper>
      </>
   );
}
