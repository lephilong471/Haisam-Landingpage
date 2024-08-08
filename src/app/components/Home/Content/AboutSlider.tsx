import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { MUIBox } from "../../MUI";
import ImageSvg from "react-inlinesvg";
import { BREAK_POINT, style } from "@/app/config";
import dynamic from "next/dynamic";

const WindowWidthWrapper = dynamic(() => import("@/app/config/hooks/useWindowWidthWrapper"), { ssr: false });

// const CarouselWrapper = styled.div`
//    position: relative;
//    width: 80%;
//    height: 100%;
//    min-height: 400px;
//    max-height: 405px;
//    margin: 0 auto;
// `;

const SlideWrapper = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   transition: all 0.5s ease;

   .image-slider_custom {
      min-width: 100%;
      width: auto !important;
   }
`;

const Slide = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: white;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 24px;
`;

const ButtonWrapper = styled.div`
   display: flex;
   justify-content: start;
   margin-top: 20px;
`;

const AboutSlider = ({ slides }) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [_direction, setDirection] = useState("next");

   const goToNext = () => {
      setDirection("next");
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
   };

   const goToPrev = () => {
      setDirection("prev");
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
   };

   return (
      <>
         <WindowWidthWrapper>
            {(screenWidth) => (
               <MUIBox sx={{ width: "100%", mt: { xs: 5, md: 0 } }}>
                  <MUIBox
                     sx={{
                        width: "100%",
                        height:
                           screenWidth > BREAK_POINT.MD ? "405px" : screenWidth > BREAK_POINT.SM ? "605px" : "300px",
                        position: "relative",
                        mx: "auto",
                     }}
                  >
                     {slides.map((slide, index) => {
                        let offset = index - currentIndex;
                        if (offset < 0) offset += slides.length;

                        return (
                           <SlideWrapper
                              key={index}
                              style={{
                                 zIndex: slides.length - offset,
                                 transform: `translate(${-(offset * 10)}px, ${-(offset * 10)}px)`,
                                 opacity: offset === 0 ? 1 : 0.7,
                                 left: 0,
                                 bottom: 0,
                                 // left:
                                 //    direction === "next"
                                 //       ? `${offset === 0 ? -100 : 0}%`
                                 //       : `${offset === slides.length - 1 ? 100 : 0}%`,
                              }}
                           >
                              <Slide>
                                 <Image
                                    className="image-slider_custom"
                                    src={slide.image}
                                    alt={slide.alt}
                                    fill
                                    style={{
                                       objectFit: "cover",
                                    }}
                                 />
                              </Slide>
                           </SlideWrapper>
                        );
                     })}
                  </MUIBox>
                  <ButtonWrapper>
                     <MUIBox
                        onClick={goToPrev}
                        className="custom-prev"
                        sx={{ cursor: "pointer", color: style.TEXT_COLOR_GENERAL, width: "30px" }}
                     >
                        <ImageSvg src="/images/icons/ArrowBackRoundedIcon.svg" />
                     </MUIBox>
                     <MUIBox
                        onClick={goToNext}
                        className="custom-next"
                        sx={{ cursor: "pointer", color: style.TEXT_COLOR_GENERAL, width: "30px" }}
                     >
                        <ImageSvg src="/images/icons/ArrowForwardRoundedIcon.svg" />
                     </MUIBox>
                     {/* <Button onClick={goToPrev}>Previous</Button>
               <Button onClick={goToNext}>Next</Button> */}
                  </ButtonWrapper>
               </MUIBox>
            )}
         </WindowWidthWrapper>
      </>
   );
};

export default AboutSlider;
