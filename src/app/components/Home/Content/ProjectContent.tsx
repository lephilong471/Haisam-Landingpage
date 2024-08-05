"use client";
import React, { useEffect } from "react";
import { MUIBox, MUITypography } from "@/app/components/MUI";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Link from "next/link";
import AOS from "aos";
// import Splitting from "splitting";
import styled from "styled-components";
import { Divider } from "@mui/material";
import { FONT_FAMILY, style } from "@/app/config";
import { PATH } from "@/app/config/routes";
import SliderProject from "./SliderProject";

import dynamic from "next/dynamic";
const SplittingText = dynamic(()=>import("@/app/components/Home/Content/SplittingText"),{ssr: false})

const ProjectContentStyled = styled("div")`
   .splitting .char {
      animation: slide-in 1s cubic-bezier(0.5, 0, 0.5, 1) both;
      animation-delay: calc(60ms * var(--char-index));
   }

   @keyframes slide-in {
      from {
         transform: translateX(100px);
         opacity: 0;
      }
   }
`;

const ProjectContent = () => {
   useEffect(() => {
      // Splitting();
      AOS.init();
   }, []);

   return (
      <ProjectContentStyled>
         <MUIBox className="container">
            <MUIBox sx={{ marginTop: { md: "20%", lg: "80px" }, marginBottom: { md: "1%", lg: "50px" } }}>
               {/* <MUITypography
                  pb={3}
                  fontFamily={FONT_FAMILY.OUTFIT}
                  variant="h1"
                  fontSize={114}
                  fontWeight={700}
                  lineHeight={"1em"}
                  letterSpacing={"-0.04em"}
                  className="word-holder"
                  data-splitting="chars"
               >
                  Logistics Triumphs
               </MUITypography> */}
               <SplittingText props={['Logistics', 'Triumphs']} />
               <Divider />
               <MUIBox
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  sx={{
                     display: "flex",
                     justifyContent: "end",
                     alignItems: "center",
                     marginBottom: "35px",
                     "&:hover": {
                        gap: "5px",
                     },
                  }}
               >
                  <Link
                     href={PATH.ABOUT}
                     style={{ textDecoration: "none", display: "inline-block", cursor: "pointer" }}
                  >
                     <MUITypography
                        fontSize={20}
                        fontWeight={500}
                        fontFamily={FONT_FAMILY.JOST}
                        color={style.TEXT_COLOR_GENERAL}
                        lineHeight={"2em"}
                        sx={{
                           position: "relative",
                           "&::after": {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              width: "100%",
                              height: "2px",
                              backgroundColor: `currentColor`,
                              transition: `background-color .25s ease-in-out, width .36s cubic-bezier(.51,.5,.07,.99)`,
                              backfaceVisibility: "hidden",
                           },
                           "&:hover::after": {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              width: "0%",
                              height: "2px",
                              backgroundColor: `${style.TEXT_COLOR_GENERAL}`,
                              transition: `background-color .25s ease-in-out, width .36s cubic-bezier(.51,.5,.07,.99)`,
                              backfaceVisibility: "hidden",
                           },
                        }}
                     >
                        Last project
                     </MUITypography>
                  </Link>
                  <ArrowOutwardRoundedIcon className="icon-project" />
               </MUIBox>
               <MUIBox data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000" data-aos-once="true">
                  <MUITypography fontSize={32} fontFamily={FONT_FAMILY.JOST} color={style.TEXT_COLOR_TITLE}>
                     Beyond Boundaries: Our Project Narratives
                  </MUITypography>
               </MUIBox>
            </MUIBox>
         </MUIBox>
         <MUIBox>
            <SliderProject />
         </MUIBox>
      </ProjectContentStyled>
   );
};

export default ProjectContent;
