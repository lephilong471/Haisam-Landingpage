import React from "react";
import { MUIBox, MUITypography } from "../../MUI";
import { Divider } from "@mui/material";
import CountUp from "react-countup";

const CardItem = (props) => {
   return (
      <MUIBox mb={"34px"} {...props}>
         <MUITypography
            fontSize={102}
            fontFamily={"Bebas Neue"}
            lineHeight={1}
            className="percent"
            sx={{
               textShadow: "none",
               color: "transparent !important",
               "-webkitTextStrokeWidth": 1,
               "-webkitTextStrokeColor": "#333",
            }}
         >
            <CountUp start={0} end={props.percent} duration={5} enableScrollSpy={true} scrollSpyOnce={true}>
               {({ countUpRef }) => (
                  <div>
                     <span ref={countUpRef} />%
                  </div>
               )}
            </CountUp>
         </MUITypography>
         <Divider sx={{ my: 1 }}></Divider>
         <MUITypography fontSize={"20px"} fontWeight={500} pt={2} pb={2.5}>
            {props?.title}
         </MUITypography>
      </MUIBox>
   );
};

export default CardItem;
