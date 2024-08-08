"use client";
import { Box, Divider, Grid, styled } from "@mui/material";
import React, { useEffect } from "react";
import { MUIBox, MUIGrid, MUITypography } from "@/app/components/MUI";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

// import Splitting from "splitting";
import AOS from "aos";
import CardItem from "./CardItem";
import { FONT_FAMILY, style } from "@/app/config";
import { PATH } from "@/app/config/routes";

import dynamic from "next/dynamic";
const SplittingText = dynamic(() => import("@/app/components/presentation/SplittingText"), { ssr: false });

const ServiceContentStyled = styled(Box)`
   background: #fff;
   padding: 8% 0px;

   .word-holder {
      display: inline-flex;
      margin-right: 10px;
      font-family: "Outfit";
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

const text = ["Logistic", "Capabilities"];
const dataSection: any = [
   {
      title: "Warehousing and Distribution",
   },
   {
      title: "E-commerce Logistics",
   },

   {
      title: "Freight Forwarding",
   },
   {
      title: "Last-Mile Delivery",
   },
   {
      title: "Supply Chain Management",
   },

   {
      title: "Cold Chain Logistics",
   },
];

const DataCardPercent = [
   {
      percent: 100,
      title: "On-Time Deliveries",
   },
   {
      percent: 97,
      title: "Global Network Coverage",
   },
   {
      percent: 90,
      title: "Cross-Border Efficiency",
   },
];
const ServiceContent = () => {
   useEffect(() => {
      // Splitting();
      AOS.init();
   }, []);

   // let startDelay = 0;
   return (
      <ServiceContentStyled>
         <Box className="container mx-auto">
            <Grid container spacing={{ xs: 2, md: 6 }}>
               <Grid item xs={12} md={7.5}>
                  <Box
                     data-aos="fade-up"
                     data-aos-delay="300"
                     data-aos-duration="2000"
                     data-aos-once="true"
                     sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        marginBottom: "35px",
                        "&:hover .icon-service": {
                           transform: "translateX(10px)",
                        },
                     }}
                  >
                     <Link href={PATH.SERVICE} style={{ textDecoration: "none", display: "inline-block" }}>
                        <MUITypography
                           fontWeight={500}
                           fontFamily={FONT_FAMILY.JOST}
                           color={style.TEXT_COLOR_GENERAL}
                           lineHeight={"2em"}
                           sx={{
                              fontSize: { xs: "16px", sm: "20px" },
                              position: "relative",
                              "&::after": {
                                 content: '""',
                                 position: "absolute",
                                 bottom: 0,
                                 left: 0,
                                 width: "100%",
                                 height: { xs: "1px", md: "2px" },
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
                                 height: { xs: "1px", md: "2px" },
                                 backgroundColor: `${style.TEXT_COLOR_GENERAL}`,
                                 transition: `background-color .25s ease-in-out, width .36s cubic-bezier(.51,.5,.07,.99)`,
                                 backfaceVisibility: "hidden",
                              },
                           }}
                        >
                           All service
                        </MUITypography>
                     </Link>
                     <ArrowOutwardRoundedIcon className="icon-service" />
                  </Box>
                  <MUIBox mb={3}>
                     {text.map((item, index) => (
                        <MUITypography
                           key={index}
                           variant="h1"
                           fontWeight={700}
                           lineHeight={"1em"}
                           letterSpacing={"-0.04em"}
                           className="word-holder"
                           sx={{ fontSize: { xs: "40px", sm: "66px", lg: "114px" } }}
                        >
                           <SplittingText>{item}</SplittingText>
                        </MUITypography>
                     ))}
                  </MUIBox>

                  <Divider sx={{ mb: "20px" }} />
                  <MUIBox sx={{ mb: "40px" }}>
                     <MUITypography
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        variant="h2"
                        fontSize={"32px"}
                        fontWeight={400}
                        fontFamily={FONT_FAMILY.JOST}
                        sx={{ mb: "20px", fontSize: { xs: "18px", sm: "20px", lg: "32px" } }}
                     >
                        Delivering Possibilities, On Time
                     </MUITypography>
                     <MUITypography
                        fontFamily={FONT_FAMILY.JOST}
                        color={"rgb(86, 103, 109)"}
                        lineHeight={1.9}
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        sx={{ mb: "20px", fontSize: { xs: "16px", sm: "17px" } }}
                     >
                        At Logistica, we are more than just a logistics company – we are the architects of seamless
                        supply chains, the navigators of global trade, and the enablers of business growth.
                     </MUITypography>
                  </MUIBox>
                  <MUIBox
                     sx={{ display: "flex", justifyContent: "start", gap: "20px" }}
                     data-aos="fade-up"
                     data-aos-delay="250"
                     data-aos-duration="1500"
                     data-aos-once="true"
                  >
                     <MUIGrid container>
                        <MUIGrid item xs={12} md={6}>
                           <ul style={{ padding: 0, listStyleType: "none", margin: 0 }}>
                              {dataSection.map((item: any, index: number) =>
                                 index % 2 === 0 ? (
                                    <li key={index}>
                                       <Link
                                          href={"#"}
                                          style={{
                                             textDecoration: "none",
                                             display: "flex",
                                             alignItems: "center",
                                             gap: "5px",
                                             color: style.TEXT_COLOR_GENERAL,
                                          }}
                                       >
                                          <AddIcon />{" "}
                                          <MUITypography
                                             lineHeight={"30px"}
                                             fontFamily={FONT_FAMILY.JOST}
                                             color={style.TEXT_COLOR_GENERAL}
                                          >
                                             {item.title}
                                          </MUITypography>
                                       </Link>
                                    </li>
                                 ) : null
                              )}
                           </ul>
                        </MUIGrid>
                        <MUIGrid item xs={12} md={6}>
                           <ul style={{ padding: 0, listStyleType: "none", margin: 0 }}>
                              {dataSection.map((item: any, index: number) =>
                                 index % 2 !== 0 ? (
                                    <li key={index}>
                                       <Link
                                          href={"#"}
                                          style={{
                                             textDecoration: "none",
                                             display: "flex",
                                             alignItems: "center",
                                             color: style.TEXT_COLOR_GENERAL,
                                             gap: "5px",
                                          }}
                                       >
                                          <AddIcon />{" "}
                                          <MUITypography
                                             lineHeight={"30px"}
                                             fontFamily={FONT_FAMILY.JOST}
                                             color={style.TEXT_COLOR_GENERAL}
                                          >
                                             {item.title}
                                          </MUITypography>
                                       </Link>
                                    </li>
                                 ) : null
                              )}
                           </ul>
                        </MUIGrid>
                     </MUIGrid>
                  </MUIBox>
               </Grid>
               <Grid item xs={0} md={0.7}></Grid>
               <Grid item xs={12} md={3.5}>
                  {DataCardPercent.map((item, index) => (
                     <CardItem
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        key={index}
                        title={item.title}
                        percent={item.percent}
                     />
                  ))}
               </Grid>
            </Grid>
         </Box>
      </ServiceContentStyled>
   );
};

export default ServiceContent;
