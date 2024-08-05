"use client";
import React, {useEffect} from "react";
import { MUIBox, MUITypography, MUIGrid, MUILink, MUITextField, MUIButton } from "../components/MUI";
import styled from "styled-components";
import {style, FONT_FAMILY} from '@/app/config'

import AOS from "aos";

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube';

import * as Yup from 'yup';
import { useFormik } from "formik";

import SubFooter from "../components/Home/SubFooter";
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

import dynamic from 'next/dynamic';
const SplittingText= dynamic(() => import('../components/Home/Content/SplittingText'), {
  ssr: false
});

const ContentStyled = styled(MUIBox)`
   p{
      font-family: ${FONT_FAMILY.MONTSERRAT};
      color: ${style.TEXT_COLOR_GENERAL};
   }
`
const Contact = () => {
   const text = ['Liên', 'Hệ']

   const subFooterBackground = 'stack-containers-cargo-ship-import-export-harbor-port.jpg'
   const errorMessage = Yup.object().shape({
      name: Yup.string().required('Trường bắt buộc nhập.'),
      email: Yup.string().email('Vui lòng nhập đúng định dạng email').required('Trường bắt buộc nhập.'),
      content: Yup.string().required('Trường bắt buộc nhập'),
    });
  
    const myForm = useFormik({
      initialValues: {
         name: '',
         email: '',
         content: '',
         submit: null,
      },

      validationSchema: errorMessage,
      onSubmit: (values, helpers) => {
         console.log(values)
      }})

   useEffect(() => {
      AOS.init();
   },[])

   return (
      <ContentStyled>
         <MUIBox className="container mx-auto">
            <MUIGrid 
               container
               sx={{
                  pb: '5%'
               }}>
               <MUIGrid item md={7} xs={12}>
                  {/* <MUIBox sx={{
                     margin: '10% 15% 4% 0%',
                     padding: '0% 14% 6% 0%',
                     borderBottom: `1px solid ${style.TEXT_HIGHLIGHT_COLOR}`
                  }} data-splitting="chars">
                     {text.map((item, index) => {
                        return (
                           <MUITypography
                              variant="h1"
                              fontSize={116}
                              fontWeight={700}
                              lineHeight={"1em"}
                              letterSpacing={"-0.04em"}
                              className="word-holder"
                              color={style.TEXT_COLOR_TITLE}
                              key={index}
                           >
                              {item}
                           </MUITypography>
                        )
                     })}
                  </MUIBox> */}
                  <SplittingText props={text}/>
                  <MUIBox
                     data-aos="fade-up"
                     data-aos-delay="300"
                     data-aos-duration="2000"
                     sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                     }}
                  >
                     <MUITypography sx={{fontWeight:'500', fontSize: '28px'}}>Bạn muốn liên hệ với Hải Sâm? Hãy điền thông tin ngay tại đây!</MUITypography>
                  </MUIBox>
                  <MUIBox sx={{height: '50px', mb: '20px'}}/>
                  <MUIBox sx={{mb: '20px'}}>
                     <MUITypography sx={{
                        fontSize: '18px',
                        fontWeight:'bold'
                     }}>Hotline</MUITypography>
                  </MUIBox>
                  <MUIBox sx={{mb: '20px'}}>
                     <MUITypography sx={{
                     fontSize: '24px',
                     fontWeight:'bold'
                     }}>
                        +84 777 020 707
                     </MUITypography>
                  </MUIBox>
                  <MUIBox sx={{

                     '.MuiSvgIcon-root':{
                        mx:'8px',
                        fontSize:'20px',
                        color: style.SOCIAL_ICON_COLOR,
                     }
                  }}>
                     <MUILink href="#">
                        <FacebookRoundedIcon />
                     </MUILink>
                     <MUILink href="#">
                        <TwitterIcon />
                     </MUILink>
                     <MUILink href="#">
                        <YouTubeIcon />
                     </MUILink>
                  </MUIBox>
               </MUIGrid>
               <MUIGrid item md={5} xs={12}>
                  <MUIBox sx={{
                     p: '8%',
                     '.MuiTextField-root':{
                        py:'15px',
                        'input, textarea':{
                           px:'14px',
                           fontFamily: FONT_FAMILY.MONTSERRAT,
                           fontWeight: '500'
                        },
                        'input::placeholder, textarea::placeholder':{
                           fontFamily:FONT_FAMILY.MONTSERRAT,
                           fontWeight:'500',
                           fontSize:'14px',
                        },
                     },
                     '.Mui-error':{
                        fontWeight: '500',
                        color: `${style.TEXT_COLOR_ERROR} !important`,
                        fontSize:'14px',
                        display: 'flex',
                        alignItems:'center',
                        mt:'10px',
                     },
                     '.Mui-error svg':{
                        fontSize: '20px',
                     }

                  }}>
                     <form onSubmit={myForm.handleSubmit}>
                        <MUITextField
                           // variant={formInfo.name.variant === 'standard' ? 'standard' : 'outlined'}
                           variant="standard"
                           name="name"
                           // onFocus = {(event) => setFormInfo(prev => ({...prev, [event.target['name']]: {value: formInfo.name.value, variant:'outlined'} }))}
                           // onBlur = {(event) => setFormInfo(prev => ({...prev, [event.target['name']]: {value: formInfo.name.value, variant:'standard'} }))}
                           
                           onBlur={myForm.handleBlur}
                           onChange={myForm.handleChange}
                           error={myForm.touched.name && Boolean(myForm.errors.name)}
                           helperText={myForm.touched.name && Boolean(myForm.errors.name) && (
                              <>
                                 <WarningRoundedIcon /> {myForm.errors.name}
                              </>
                           )}

                           size="small" 
                           placeholder='Họ và tên'
                           fullWidth
                        />
                        <MUITextField 
                           variant = "standard"
                           name="email"
                           onBlur={myForm.handleBlur}
                           onChange={myForm.handleChange}
                           error={myForm.touched.email && Boolean(myForm.errors.email)}
                           helperText={myForm.touched.email && Boolean(myForm.errors.email) && (
                              <>
                                 <WarningRoundedIcon /> {myForm.errors.email}
                              </>
                           )}
                           size="small" 
                           placeholder='Email'
                           fullWidth 
                        />
                        <MUITextField 
                           variant="standard"
                           onChange={myForm.handleChange}
                           error={myForm.touched.content && Boolean(myForm.errors.content)}
                           helperText={myForm.touched.content && Boolean(myForm.errors.content) && (
                              <>
                                 <WarningRoundedIcon /> {myForm.errors.email}
                              </>
                           )}
                           name="content"
                           multiline 
                           rows="8" 

                           size="small" 
                           placeholder='Nội dung'
                           fullWidth
                        />

                        <MUIButton 
                           variant="contained"
                           type="submit"
                           sx={{
                              background:style.TEXT_COLOR_GENERAL,
                              borderRadius:'20px',
                              textTransform:'none',
                              fontFamily:'inherit'
                           }}
                           >Submit
                        </MUIButton>
                     </form>
                  </MUIBox>
               </MUIGrid>
            </MUIGrid>
         </MUIBox>
         <SubFooter background = {subFooterBackground}/>
      </ContentStyled>

   )

};

export default Contact;
