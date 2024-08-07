import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { MUIBox } from "../../MUI";

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
   justify-content: center;
   margin-top: 20px;
`;

const Button = styled.button`
   background: white;
   border: 1px solid #ddd;
   padding: 10px 20px;
   margin: 0 10px;
   font-size: 16px;
   cursor: pointer;
   &:hover {
      background: #f0f0f0;
   }
`;

const CustomCarousel = ({ slides }) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [direction, setDirection] = useState("next");

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
         <MUIBox sx={{ width: "100%", mt: { xs: 5, md: 0 } }}>
            <MUIBox
               sx={{
                  width: "80%",
                  height: "100%",
                  position: "relative",
                  maxHeight: "405px",
                  minHeight: "375px",
                  mx: "auti",
                  possition: "relative",
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
                           transform: `translate(${-(offset * 20)}px, ${-(offset * 20)}px)`,
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
               <Button onClick={goToPrev}>Previous</Button>
               <Button onClick={goToNext}>Next</Button>
            </ButtonWrapper>
         </MUIBox>
      </>
   );
};

export default CustomCarousel;
