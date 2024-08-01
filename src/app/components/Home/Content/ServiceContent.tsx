"use client";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { MUITypography } from "@/app/components/MUI";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Link from "next/link";

interface CharacterProps {
   delay: number;
}

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
`;

const Character = styled("span")<CharacterProps>(({ delay }) => ({
   display: "inline-block",
   opacity: 1,
   transform: "translateX(0px) translateZ(0);",
   transition: `opacity 1s, transform 2s cubic-bezier(.26,-.14,0,1.01)`,
   transitionDelay: `${delay}ms`,
   "&.visible": {
      opacity: 0,
      transform: "translateX(200px)",
   },
}));

const ServiceContent = () => {
   const text = ["Logistic", "Capabilities"];
   let startDelay = 0;
   return (
      <ServiceContentStyled>
         <Box className="container mx-auto">
            <Grid container spacing={2}>
               <Grid item md={7}>
                  <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom:'35px'  }}>
                     <Link href={"/pages/service"} style={{ textDecoration: "none", display: "inline-block"}}>
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
                     <ArrowOutwardRoundedIcon />
                  </Box>
                  <Box pb={4}>
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
                           console.log("word", startDelay, word);

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
                  </Box>
                  <Divider />
               </Grid>
               <Grid item md={5}>
                  b
               </Grid>
            </Grid>
         </Box>
      </ServiceContentStyled>
   );
};

export default ServiceContent;
