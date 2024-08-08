"use client";
import { FONT_FAMILY, style } from "@/config";
import { MUIBox, MUITypography } from "../components/MUI";
import { usePathname } from "next/navigation";
import subFooterBackground from "@/public/images/basic/stack-containers-cargo-ship-import-export-harbor-port.jpg";
import { PATH } from "@/config/routes";
import AOS from "aos";
import React, { useEffect } from "react";

const SubFooter = () => {
   const path = usePathname();

   useEffect(() => {
      AOS.init();
   }, []);

   return (
      <MUIBox
         className={`${path === PATH.CONTACT ? "bg-contact" : "contact"}`}
         sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&:not(.contact)": {
               backgroundColor: "#040716",
            },
         }}
      >
         <MUIBox
            sx={{
               backgroundImage: path === PATH.CONTACT ? `url(${subFooterBackground.src})` : "#fff",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
               opacity: path === PATH.CONTACT ? "0.06" : "1",
               width: "100%",
               height: "100%",
               position: "absolute",
               inset: 0,
            }}
         />
         <MUIBox
            sx={{
               p: "10%",
               position: "relative",

               // zIndex: "1",
            }}
         >
            <MUITypography
               fontSize={20}
               fontWeight={700}
               fontFamily={FONT_FAMILY.MONTSERRAT}
               sx={{ mb: 2.8, color: path == PATH.CONTACT ? "#fff !important" : style.TEXT_COLOR_SUB_FOOTER }}
            >
               CÔNG TY TNHH THƯƠNG MẠI VÀ XUẤT NHẬP KHẨU HẢI SÂM
            </MUITypography>

            <MUITypography
               color={path == PATH.CONTACT ? "#fff !important" : style.TEXT_COLOR_SUB_FOOTER}
               fontFamily={FONT_FAMILY.MONTSERRAT}
               fontWeight={500}
               fontSize={17}
            >
               Địa chỉ: Lô 13- LK5 Khu đô thị Green Park - Móng Cái - Quảng Ninh
            </MUITypography>

            <MUITypography
               color={path == PATH.CONTACT ? "#fff !important" : style.TEXT_COLOR_SUB_FOOTER}
               fontFamily={FONT_FAMILY.MONTSERRAT}
               fontWeight={500}
               fontSize={17}
            >
               Email: Haisamlogistics@gmail.com
            </MUITypography>

            <MUITypography
               color={path == PATH.CONTACT ? "#fff !important" : style.TEXT_COLOR_SUB_FOOTER}
               fontFamily={FONT_FAMILY.MONTSERRAT}
               fontWeight={500}
               fontSize={17}
            >
               SĐT: 0777020707
            </MUITypography>
         </MUIBox>
      </MUIBox>
   );
};

export default SubFooter;
