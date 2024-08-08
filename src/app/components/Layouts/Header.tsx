"use client";

import { MUIBox, MUITypography, MUILink, MUITextField } from "../MUI";
import { headerData, style } from "@/app/config";
import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { PATH } from "@/app/config/routes";

const AnimateStyled = styled("div")`
   display: flex;
   align-items: center;
   
   @keyframes search-text-fadein {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }

   @keyframes search-text-fadeout {
      0% {
         opacity: 1;
      }
      100% {
         opacity: 0;
      }
   }
`;

const HeaderStyled = styled("div")`
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
   right: 0;
   z-index: 100;
`;
const Header = () => {
   const path = usePathname();

   const [isSearch, setIsSearch] = useState<boolean>(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 0) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const checkRoute = (path: string, url: string) => {
      return path === url;
   };

   return (
      <HeaderStyled
         style={{
            background: isScrolled ? "white" : path == PATH.HOME || path == PATH.CONTACT ? "transparent" : "white",
         }}
      >
         <MUIBox
            sx={{
               px: "10px",
            }}
            className="container mx-auto"
         >
            <MUIBox
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom:
                     !isScrolled && (path == PATH.HOME || path == PATH.CONTACT)
                        ? "1px solid rgba(255, 255, 255, 0.25)"
                        : "1px solid rgba(0,0,0,.12)",
               }}
            >
               <MUITypography sx={{ fontFamily: "Jost", fontWeight: "500", fontSize: "24px" }}>
                  <MUILink
                     sx={{
                        textDecoration: "none !important",
                        border: "none",
                        color:
                           !isScrolled && (path == PATH.HOME || path == PATH.CONTACT)
                              ? "#fff"
                              : style.TEXT_COLOR_NORMAL,
                        ":hover": {
                           color: style.TEXT_COLOR_NORMAL,
                        },
                     }}
                     href="/"
                  >
                     HAISAM.
                  </MUILink>
               </MUITypography>
               <MUIBox
                  sx={{
                     display: "flex",
                     justifyContent: "space-around",
                  }}
               >
                  {headerData.map((item, index) => {
                     return (
                        <MUIBox
                           sx={{
                              px: "16px",
                              fontWeight: "500",
                              height: "90px",
                              display: "flex",
                              alignItems: "center",
                              fontWeigth: "bold",
                              position: "relative",
                              ".MuiLink-root:before": {
                                 content: '""',
                                 height: checkRoute(item.link, path) ? "calc(100% + 15px) !important" : "0px",
                                 backgroundColor: checkRoute(item.link, path) ? "black !important" : "",
                                 clipPath: checkRoute(item.link, path)
                                    ? "polygon(100% 0, 100% 100%, 0 calc(100% - 15px), 0 0)"
                                    : "",
                                 position: "absolute",
                                 top: "0px",
                                 right: "0px",
                                 left: "0px",
                              },

                              ":hover": {
                                 cursor: "pointer",
                                 px: "16px",
                                 ".MuiLink-root::before": {
                                    content: '""',
                                    width: "100%",
                                    height: "calc(100% + 15px) !important",
                                    backgroundColor: checkRoute(item.link, path)
                                       ? `${style.HEADER_ACTIVE_COLOR}`
                                       : `${style.HEADER_HOVER_COLOR}`,
                                    clipPath: "polygon(100% 0, 100% 100%, 0 calc(100% - 15px), 0 0)",
                                    transition: "height 0.3s",
                                 },
                              },
                           }}
                           className="unfocus"
                           key={index}
                        >
                           <MUILink
                              sx={{
                                 display: isSearch ? "none" : "flex",
                                 alignItems: "center",
                                 color:
                                    checkRoute(item.link, path) ||
                                    (!isScrolled && (path == PATH.HOME || path == PATH.CONTACT))
                                       ? "#ffffff"
                                       : style.TEXT_COLOR_NORMAL,
                                 textDecoration: "none !important",
                                 ":hover": {
                                    color: checkRoute(item.link, path) ? "#ffffff" : style.TEXT_COLOR_NORMAL,
                                 },
                              }}
                              href={item.link}
                              className="active"
                           >
                              <MUITypography
                                 sx={{
                                    fontFamily: "Montserrat",
                                    fontSize: "12px",
                                    fontWeight: "600",
                                    zIndex: "10",
                                 }}
                              >
                                 {item.name}
                              </MUITypography>
                           </MUILink>
                        </MUIBox>
                     );
                  })}
                  <MUIBox
                     sx={{
                        display: "flex",
                        alignItems: "center",
                        ".MuiSvgIcon-root:hover": {
                           cursor: "pointer",
                        },
                        ".MuiInputBase-root:before, .MuiInputBase-root:after": {
                           display: "none",
                        },
                        ".MuiInputBase-input": {
                           textAlign: "right",
                           color: style.TEXT_COLOR_NORMAL,
                        },
                     }}
                  >
                     <AnimateStyled>
                        {isSearch ? (
                           <>
                              <MUITextField
                                 sx={{
                                    width: "160px",
                                    textAlign: "right",
                                    animation: isSearch ? "search-text-fadein 0.8s" : "search-text-fadeout 0.8s",
                                    "input::placeholder": {
                                       color: (path == PATH.HOME || path == PATH.CONTACT) ? '#fff' : style.TEXT_COLOR_TITLE,
                                       opacity: "1",
                                       fontWeight: "450",
                                       fontFamily: "Montserrat",
                                       fontSize: "14px",
                                    },
                                 }}
                                 variant="standard"
                                 placeholder="nhập thông tin"
                              />
                              <CloseIcon
                                 sx={{
                                    mx: "5px",
                                    color:
                                       !isScrolled && (path == PATH.HOME || path == PATH.CONTACT)
                                          ? "#fff"
                                          : style.TEXT_COLOR_TITLE,
                                 }}
                                 onClick={() => setIsSearch(false)}
                              />
                           </>
                        ) : (
                           <SearchIcon
                              sx={{
                                 ml: "8px",
                                 color:
                                    !isScrolled && (path == PATH.HOME || path == PATH.CONTACT)
                                       ? "#fff"
                                       : style.TEXT_COLOR_TITLE,
                              }}
                              onClick={() => setIsSearch(true)}
                           />
                        )}
                     </AnimateStyled>
                  </MUIBox>
               </MUIBox>
            </MUIBox>
         </MUIBox>
      </HeaderStyled>
   );
};

export default Header;
