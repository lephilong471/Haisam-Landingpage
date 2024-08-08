"use client";

import { MUIBox, MUITypography, MUILink, MUITextField } from "../components/MUI";
import { BREAK_POINT, FONT_FAMILY, headerData, style } from "@/config";
import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { PATH } from "@/config/routes";
import { Divider, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Input, Form, Button } from "antd";

import dynamic from "next/dynamic";

const WindowWidthWrapper = dynamic(() => import("@/config/hooks/useWindowWidthWrapper"), { ssr: false });

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
   .icon-toggle {
      border: none;
      box-shadow: none;
      margin-right: 20px;
   }
`;
const Header = () => {
   const path = usePathname();
   const [expand, setExpand] = useState<boolean>(false);

   const [isSearch, setIsSearch] = useState<boolean>(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [form] = Form.useForm();

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
   useEffect(() => {
      if (isScrolled) {
         setExpand(false);
      }
   }, [isScrolled]);

   return (
      <WindowWidthWrapper>
         {(screenWidth) => (
            <HeaderStyled
               style={{
                  background:
                     screenWidth < BREAK_POINT.MD && expand
                        ? "white"
                        : isScrolled
                        ? "white"
                        : path == PATH.HOME || path == PATH.CONTACT
                        ? "transparent"
                        : "white",
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
                        display: { xs: "block", md: "flex" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: {
                           xs: "",
                           md:
                              !isScrolled && (path == PATH.HOME || path == PATH.CONTACT)
                                 ? "1px solid rgba(255, 255, 255, 0.25)"
                                 : "1px solid rgba(0,0,0,.12)",
                        },
                     }}
                  >
                     <MUITypography
                        sx={{
                           fontFamily: "Jost",
                           fontWeight: "500",
                           fontSize: "24px",
                           display: screenWidth < BREAK_POINT.MD && "flex",
                           alignItems: "center",
                        }}
                     >
                        {screenWidth < BREAK_POINT.MD && (
                           <Button
                              className="icon-toggle"
                              onClick={() => setExpand(!expand)}
                              icon={
                                 expand ? (
                                    <CloseRoundedIcon
                                       style={{
                                          color: expand
                                             ? style.TEXT_COLOR_NORMAL
                                             : !isScrolled && (path == PATH.HOME || path == PATH.CONTACT)
                                             ? "#fff"
                                             : style.TEXT_COLOR_NORMAL,
                                       }}
                                    />
                                 ) : (
                                    <MenuRoundedIcon style={{ color: "#000" }} />
                                 )
                              }
                           ></Button>
                        )}
                        <MUILink
                           sx={{
                              textDecoration: "none !important",
                              border: "none",
                              color:
                                 screenWidth < BREAK_POINT.MD && expand
                                    ? style.TEXT_COLOR_NORMAL
                                    : !isScrolled && (path == PATH.HOME || path == PATH.CONTACT)
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
                           display: { xs: "none", md: "flex" },
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
                                             color:
                                                path == PATH.HOME || path == PATH.CONTACT
                                                   ? "#fff"
                                                   : style.TEXT_COLOR_TITLE,
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
                     <MUIBox sx={{ py: 4.2, display: { xs: expand ? "block" : "none", md: "none" } }}>
                        {headerData.map((item, index) => (
                           <>
                              <MUILink key={index} href={item.link} sx={{ py: 2.5, display: "block" }}>
                                 <MUITypography
                                    textTransform="uppercase"
                                    fontFamily={FONT_FAMILY.JOST}
                                    sx={{ fontSize: "18px" }}
                                    color={"#222222"}
                                 >
                                    {item.name}
                                 </MUITypography>
                              </MUILink>
                              {index !== headerData.length - 1 && <Divider />}
                           </>
                        ))}
                        <MUIBox
                           sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                              alignItems: "center",
                              py: 2,
                           }}
                        >
                           <MUITypography
                              textTransform={"uppercase"}
                              fontSize={12}
                              sx={{ opacity: "0.5" }}
                              lineHeight={1.3}
                              fontFamily={FONT_FAMILY.JOST}
                           >
                              Search for
                           </MUITypography>
                           <Form form={form}>
                              <Form.Item name={"search"}>
                                 <Input
                                    type="search"
                                    style={{ textAlign: "center", color: "#222", padding: "1em 1.2em" }}
                                    variant="borderless"
                                    placeholder="nhập thông tin"
                                 />
                              </Form.Item>
                           </Form>
                        </MUIBox>
                     </MUIBox>
                  </MUIBox>
               </MUIBox>
            </HeaderStyled>
         )}
      </WindowWidthWrapper>
   );
};

export default Header;
