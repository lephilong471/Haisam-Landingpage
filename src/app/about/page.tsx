"use client";
import { MUIBox, MUIGrid, MUITypography } from "../components/MUI";
import styled from "styled-components";
import React from "react";

import dynamic from "next/dynamic";
import AboutSlider from "../components/Home/Content/AboutSlider";
import { FONT_FAMILY } from "../config";
const SplittingText = dynamic(() => import("@/app/components/presentation/SplittingText"), { ssr: false });
const SliderCarouselStyled = styled("div")`
   width: 100%;
   height: 100vh;
   margin-top: 10%;
   display: flex;
   align-items: center;
`;

const slides = [
   { image: "/images/slider/manager-engineer-checking.jpg", alt: "Slide 1" },
   { image: "/images/slider/container-cargo-ship-cargo-plane.jpg", alt: "Slide 2" },
   { image: "/images/slider/ship-with-cargo-container-sea.jpg", alt: "Slide 3" },
];

const About = () => {
   return (
      <SliderCarouselStyled>
         <MUIBox className="container mx-auto">
            <MUIGrid container>
               <MUIGrid item md={7} xs={12}>
                  <MUITypography
                     variant="h1"
                     fontWeight={700}
                     lineHeight={"1em"}
                     letterSpacing={"-0.04em"}
                     textTransform={"capitalize"}
                     data-splitting="chars"
                     fontFamily={FONT_FAMILY.OUTFIT}
                     sx={{ fontSize: { xs: "40px", sm: "66px", lg: "116px" } }}
                  >
                     <SplittingText>Why Choose Us</SplittingText>
                  </MUITypography>
               </MUIGrid>
               <MUIGrid item md={5} xs={12}>
                  <AboutSlider slides={slides} />
               </MUIGrid>
            </MUIGrid>
         </MUIBox>
      </SliderCarouselStyled>
   );
};

export default About;
