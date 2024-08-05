"use client";
import React, { useEffect } from "react";
import { MUIBox, MUITypography } from "../../MUI";
import { style, FONT_FAMILY } from "../../../config";
import styled from "styled-components";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import "aos/dist/aos.css";

import Splitting from "splitting";

const ContentStyled = styled(MUIBox)`
   p {
      font-family: "Montserrat";
      color: ${style.TEXT_COLOR_GENERAL};
   }

   .word-holder {
      display: inline-flex;
      margin-right: 15px;
      font-family: ${FONT_FAMILY.MONTSERRAT};
   }

   .word-holder span {
      display: inline-block;
   }

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
const SplittingText = ({ props }) => {
   //    const text = ['Liên', 'Hệ']
   useEffect(() => {
      Splitting();
   });
   return (
      <ContentStyled>
         <MUIBox
            sx={{
               // margin: '10% 15% 4% 0%',
               // padding: '0% 14% 6% 0%',
               // borderBottom: `1px solid ${style.TEXT_HIGHLIGHT_COLOR}`
               pb: "20px",
            }}
            data-splitting="chars"
         >
            {props.map((item: string, index: number) => {
               return (
                  <MUITypography
                     variant="h1"
                     fontSize={114}
                     fontWeight={700}
                     lineHeight={"1em"}
                     letterSpacing={"-0.04em"}
                     className="word-holder"
                     color={style.TEXT_COLOR_TITLE}
                     key={index}
                  >
                     {item}
                  </MUITypography>
               );
            })}
         </MUIBox>
      </ContentStyled>
   );
};

export default SplittingText;
