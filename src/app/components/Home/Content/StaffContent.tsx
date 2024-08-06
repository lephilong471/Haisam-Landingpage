"use client";
import React from "react";
import styled from "styled-components";
import { MUIBox, MUIGrid, MUITypography } from "../../MUI";
import dynamic from "next/dynamic";
import { FONT_FAMILY, style } from "@/app/config";
import { Divider } from "@mui/material";
import Image from "next/image";

const SplittingText = dynamic(() => import("@/app/components/presentation/SplittingText"), { ssr: false });

const StaffContentStyled = styled("div")``;
const StaffContent = () => {
   return (
      <StaffContentStyled className="container">
         <MUIBox pb={3}>
            <MUITypography
               variant="h1"
               fontSize={116}
               fontWeight={700}
               lineHeight={"1em"}
               letterSpacing={"-0.04em"}
               textTransform={"capitalize"}
               fontFamily={FONT_FAMILY.OUTFIT}
            >
               <SplittingText>Meet Our Staff</SplittingText>
            </MUITypography>
         </MUIBox>
         <Divider sx={{ mb: "20px" }} />
         <MUIBox data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000" data-aos-once="true">
            <MUITypography fontSize={32} fontFamily={FONT_FAMILY.JOST} color={style.TEXT_COLOR_TITLE}>
               Teamwork Beyond Boundaries
            </MUITypography>
         </MUIBox>
         <MUIBox sx={{ pt: "112px" }}>
            <MUIGrid container spacing={9}>
               <MUIGrid item xs={12} md={4}>
                  <MUIBox sx={{ width: "100%", minHeight: "370px", position: "relative" }}>
                     <Image src="/images/staff/t-03.jpg" alt="" objectFit="cover" layout="fill" />
                     <MUIBox
                        sx={{
                           position: "absolute",
                           bottom: "0",
                           left: "0",
                           width: "100%",
                           height: "auto",
                           padding: "30px",
                           background: "#fff",
                        }}
                     >
                        <MUITypography
                           variant="h4"
                           fontSize={22}
                           fontWeight={600}
                           letterSpacing={"0.4px"}
                           m={0}
                           color={style.TEXT_COLOR_TITLE}
                           pb={"12px"}
                           fontFamily={FONT_FAMILY.JOST}
                        >
                           Roger Craig
                        </MUITypography>
                        <MUITypography
                           fontSize={16}
                           lineHeight={"1px"}
                           mb={"20px"}
                           style={{ color: `rgb(86, 103, 109)` }}
                           fontFamily={FONT_FAMILY.JOST}
                        >
                           CEO
                        </MUITypography>
                        <MUIBox>icon</MUIBox>
                     </MUIBox>
                  </MUIBox>
               </MUIGrid>
               <MUIGrid item xs={12} md={4}>
                  <MUIBox sx={{ width: "100%", minHeight: "370px", position: "relative", mt: "-50px" }}>
                     <Image src="/images/staff/t-03.jpg" alt="" objectFit="cover" layout="fill" />
                  </MUIBox>
               </MUIGrid>
               <MUIGrid item xs={12} md={4}>
                  <MUIBox sx={{ width: "100%", minHeight: "370px", position: "relative" }}>
                     <Image src="/images/staff/t-03.jpg" alt="" objectFit="cover" layout="fill" />
                  </MUIBox>
               </MUIGrid>
            </MUIGrid>
         </MUIBox>
      </StaffContentStyled>
   );
};
export default StaffContent;
