"use client";
import React from "react";
import { MUIBox, MUITypography } from "@/app/components/MUI";
import { FONT_FAMILY, style } from "@/app/config";
import CountUp from "react-countup";

const AboutProgress = (props) => {
   return (
      <MUIBox
         mb={2.5}
         sx={{ padding: "0% 7% 0% 17%" }}
         data-aos="fade-up"
         data-aos-delay="100"
         data-aos-duration="2000"
         data-aos-once="true"
      >
         <MUIBox
            sx={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               pb: 1.5,
            }}
         >
            <MUITypography
               fontFamily={FONT_FAMILY.JOST}
               fontWeight={700}
               color={style.TEXT_COLOR_GENERAL}
               fontSize={15}
            >
               {props?.title}
            </MUITypography>
            <MUITypography
               fontFamily={FONT_FAMILY.JOST}
               fontWeight={700}
               color={style.TEXT_COLOR_GENERAL}
               fontSize={12}
            >
               <CountUp start={0} end={props.percent} duration={3} enableScrollSpy={true} scrollSpyOnce={true}>
                  {({ countUpRef }) => (
                     <span>
                        <span ref={countUpRef} />%
                     </span>
                  )}
               </CountUp>
            </MUITypography>
         </MUIBox>
         <MUIBox sx={{ width: "100%", background: "#ececec", height: "1px" }}>
            <MUIBox
               sx={{ width: `${props?.percent}%`, background: `${style.TEXT_COLOR_GENERAL}`, height: "1px" }}
            ></MUIBox>
         </MUIBox>
      </MUIBox>
   );
};

export default AboutProgress;
