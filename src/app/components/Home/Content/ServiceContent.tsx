"use client";
import { Box, Divider, Grid, styled } from "@mui/material";
import React, { useEffect } from "react";
import { MUIBox, MUIGrid, MUITypography } from "@/app/components/MUI";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

import Splitting from "splitting";
import AOS from "aos";
import CardItem from "./CardItem";

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
      Splitting();
      AOS.init();
   }, []);

   // let startDelay = 0;
   return (
      <ServiceContentStyled>
         <Box className="container mx-auto">
            <Grid container spacing={6}>
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
                           ml: "5px",
                        },
                     }}
                  >
                     <Link href={"/pages/service"} style={{ textDecoration: "none", display: "inline-block" }}>
                        <MUITypography
                           fontSize={20}
                           fontWeight={500}
                           fontFamily={"Jost"}
                           color={"#203556"}
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
                                 backgroundColor: `#203556`,
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
                  <Box data-splitting="chars" pb={4}>
                     {text.map((item, index) => (
                        <MUITypography
                           key={index}
                           variant="h1"
                           fontSize={114}
                           fontWeight={700}
                           lineHeight={"1em"}
                           letterSpacing={"-0.04em"}
                           className="word-holder"
                        >
                           {item}
                        </MUITypography>
                     ))}
                  </Box>
                  {/* <Box pb={4}>
                     <MUITypography
                        variant="h1"
                        fontSize={114}
                        fontWeight={700}
                        lineHeight={"1em"}
                        letterSpacing={"-0.04em"}
                     >
                        {text.map((word: any, wordIndex) => {
                           let index = 1;
                           if (index !== wordIndex) {
                              startDelay = word.length * 60 + 60;
                           }
                           return (
                              <span key={wordIndex} className="word-holder" style={{ whiteSpace: "nowrap" }}>
                                 {word.split("").map((char: any, charIndex: number) => {
                                    if (charIndex === word.length - 1) {
                                       index++;
                                    }
                                    return (
                                       <Character
                                          key={charIndex}
                                          delay={
                                             wordIndex === 0
                                                ? charIndex * 60
                                                : charIndex === 0
                                                ? startDelay
                                                : startDelay + charIndex * 60
                                          }
                                       >
                                          {char}
                                       </Character>
                                    );
                                 })}
                              </span>
                           );
                        })}
                     </MUITypography>
                  </Box> */}
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
                        fontFamily={"Jost"}
                        sx={{ mb: "20px" }}
                     >
                        Delivering Possibilities, On Time
                     </MUITypography>
                     <MUITypography
                        fontWeight={500}
                        fontFamily={"Jost"}
                        color={"#56676d"}
                        letterSpacing={"0.1em"}
                        data-aos="fade-up"
                        data-aos-delay="250"
                        data-aos-duration="1500"
                        data-aos-once="true"
                        sx={{ mb: "20px" }}
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
                           <ul style={{ padding: 0, listStyleType: "none" }}>
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
                                             color: "#56676d",
                                          }}
                                       >
                                          <AddIcon /> <MUITypography>{item.title}</MUITypography>
                                       </Link>
                                    </li>
                                 ) : null
                              )}
                           </ul>
                        </MUIGrid>
                        <MUIGrid item xs={12} md={6}>
                           <ul style={{ padding: 0, listStyleType: "none" }}>
                              {dataSection.map((item: any, index: number) =>
                                 index % 2 !== 0 ? (
                                    <li key={index}>
                                       <Link
                                          href={"#"}
                                          style={{
                                             textDecoration: "none",
                                             display: "flex",
                                             alignItems: "center",
                                             color: "#56676d",
                                             gap: "5px",
                                          }}
                                       >
                                          <AddIcon /> <MUITypography>{item.title}</MUITypography>
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
