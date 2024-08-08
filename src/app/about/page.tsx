"use client"
import { useEffect } from "react";
import AOS from "aos";

import { MUIBox, MUIGrid, MUITypography } from "../components/MUI"
import styled from "styled-components";
import { style, FONT_FAMILY } from '@/app/config'

import ShipFlying from '@/public/images/basic/earth-surrounded-by-cardboard-boxes-cargo-container-ship-flying-plan-car-van-truck.jpg'

import dynamic from "next/dynamic";
const SplittingText = dynamic(() => import("@/app/components/presentation/SplittingText"), { ssr: false });

import AboutSlider from '@/app/components/Home/Content/AboutSlider'
import { Divider } from "@mui/material";
import SubFooter from "@/app/components/Layouts/SubFooter";
import StaffContent from "@/app/components/Home/Content/StaffContent";

import CargoShip from '@/public/images/slider/aerial-view-top-view-cargo-plane-flying-ship-port-export-import-logistics-international-goods-ai-generation-1000x1000.jpg'
import Truck from '@/public/images/slider/self-driving-futuristic-freight-truck-deliver-goods-warehouse-city-highway-1000x1000.jpg'

const ContentStyled = styled("div")`
    p {
      font-family: ${FONT_FAMILY.MONTSERRAT};
      color: ${style.TEXT_LIST_EXPAND_COLOR};
    }
`;

const ImageStyled = styled.img`
   max-width: 100%;
`
const slides = [
    { image: "/images/slider/self-driving-futuristic-freight-truck-deliver-goods-warehouse-city-highway-1000x1000.jpg", alt: "Slide 1" },
    { image: "/images/slider/cargo-ship-carrying-containers-export-import-is-shown-global-world-service-freight-1000x1000.jpg", alt: "Slide 2" },
    { image: "/images/slider/aerial-view-top-view-cargo-plane-flying-ship-port-export-import-logistics-international-goods-ai-generation-1000x1000.jpg", alt: "Slide 3" },
    // Thêm các slide khác nếu cần
];

const aboutContent = [
    {
        title: 'Tầm nhìn',
        content: 'Hải Sâm hướng tới trở thành đơn vị dẫn đầu trong lĩnh vực dịch vụ logistics tại Việt Nam và khu vực, không ngừng đổi mới và phát triển để đáp ứng nhu cầu ngày càng cao của thị trường.'
    },
    {
        title: 'Sứ mệnh',
        content: 'Hải Sâm luôn đặt lợi ích của khách hàng lên hàng đầu, đảm bảo sự hài lòng và tin cậy thông qua các dịch vụ chất lượng, mang đến các giải pháp logistics chất lượng cao, hiệu quả và đáng tin cậy cho khách hàng. Chúng tôi mong muốn góp phần vào sự phát triển bền vững của doanh nghiệp, cộng đồng và nền kinh tế.'
    },
]

const valuesContent = [
    'Luôn đặt chất lượng dịch vụ lên hàng đầu, đảm bảo giải pháp logistics của chúng tôi đều đáp ứng tiêu chuẩn cao nhất và mang lại sự hài lòng cho khách hàng. Với đội vận tải lớn mạnh, chúng tôi hướng đến việc xây dựng hệ thống vận tải giá rẻ, tốc độ nhanh.',
    'Không ngừng tìm kiếm và áp dụng các công nghệ tiên tiến và quy trình hiện đại để cải thiện hiệu quả và chất lượng dịch vụ.',
    'Xây dựng lòng tin với khách hàng và đối tác thông qua sự minh bạch, trung thực và cam kết đúng hẹn trong mọi hoạt động.',
    'Phát triển đội ngũ nhân viên có trình độ cao, chuyên môn sâu và luôn giữ thái độ phục vụ tận tâm, chu đáo.',
    'Đề cao tinh thần hợp tác, xây dựng mối quan hệ đối tác bền vững và phát triển cùng có lợi với khách hàng và đối tác.'
]
const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <MUIBox
                sx={{
                    position: 'relative',
                    marginTop: '-51px',
                    width: '100%',
                    minHeight: '545px',
                    backgroundImage: `url(${ShipFlying.src})`,
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',

                }}
            />
            <ContentStyled>

                <MUIBox className="container mx-auto">
                    <MUIGrid container>
                        <MUIGrid item md={7} xs={12}>
                            <MUIBox sx={{
                                mt: '13%',
                                mb: '24px'
                            }}>

                                <MUITypography
                                    variant="h1"
                                    fontSize={116}
                                    fontWeight={700}
                                    lineHeight={"1em"}
                                    letterSpacing={"-0.04em"}
                                    color={style.TEXT_COLOR_TITLE}
                                    sx={{
                                        fontSize: { xs: "40px", sm: "66px", lg: "114px" },
                                        '.char': {
                                            fontFamily: FONT_FAMILY.MONTSERRAT
                                        }
                                    }}
                                >
                                    <SplittingText>Về Hải Sâm</SplittingText>
                                </MUITypography>
                                <Divider sx={{ mb: "20px" }} />
                                <MUIBox
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="2000"
                                >
                                    <MUITypography
                                        sx={{
                                            fontWeight: "500",
                                            fontSize: { xs: "18px", md: "20px", lg: "32px" },
                                            color: `${style.TEXT_COLOR_TITLE} !important`
                                        }}>
                                        Tầm nhìn, Sứ mệnh, Giá trị cốt lõi
                                    </MUITypography>
                                </MUIBox>
                            </MUIBox>
                        </MUIGrid>
                        <MUIGrid item md={5} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                            <MUIBox
                                data-aos="fade-left"
                                data-aos-delay="300"
                                data-aos-duration="2000"
                                sx={{
                                    width: '100%',
                                    p: '47px',
                                }}>
                                <AboutSlider slides={slides} />
                            </MUIBox>
                        </MUIGrid>
                    </MUIGrid>
                    <MUITypography sx={{
                        fontSize: '17px',
                        p: '5%',
                        fontWeight: '500',
                        lineHeight: '35px'

                    }}>
                        Hải Sâm có trụ sở tại Quảng Ninh, là một đơn vị hàng đầu trong lĩnh vực dịch vụ logistics.
                        Với đội ngũ nhân viên giàu kinh nghiệm và kiến thức chuyên sâu về logistics cũng như đội vận tải lớn mạnh,
                        Hải Sâm cung cấp một loạt các dịch vụ đa dạng từ cho thuê kho
                        đến cung cấp dịch vụ vận tải hay xuất nhập khẩu hàng hoá…, đáp ứng mọi nhu cầu của khách hàng.
                        Cơ sở vật chất hiện đại và việc ứng dụng công nghệ tiên tiến giúp Hải Sâm đảm bảo chất lượng dịch vụ cao,
                        tối ưu hóa hoạt động logistics và tiết kiệm chi phí cho khách hàng.
                        Hải Sâm cam kết mang đến giải pháp logistics toàn diện và hiệu quả,
                        góp phần thúc đẩy sự phát triển bền vững của doanh nghiệp và cộng đồng.

                    </MUITypography>
                    <MUIGrid container>
                        <MUIGrid item lg={6} md={6}>
                            <MUIBox
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="2000"
                            >
                                <ImageStyled src={CargoShip.src} alt='' />
                            </MUIBox>
                        </MUIGrid>
                        <MUIGrid item lg={6} md={6} sx={{
                            'ol li': {
                                color: style.TEXT_COLOR_GENERAL,
                                fontSize: { xs: '16px', lg: '17px' },
                                fontFamily: FONT_FAMILY.MONTSERRAT,
                                mb: '20px',
                                'span:nth-child(1)': {
                                    fontWeight: 'bold',
                                },
                                'span:nth-child(2)': {
                                    ml: '10px',
                                    fontWeight: '500',
                                    lineHeight: '35px',

                                }
                            }
                        }}>
                            <ol
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="2000"
                            >
                                {aboutContent.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span>{item.title}</span>:
                                            <span>
                                                {item.content}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ol>
                        </MUIGrid>
                    </MUIGrid>
                    <MUITypography sx={{
                            fontFamily: FONT_FAMILY.MONTSERRAT,
                            fontWeight: 'bold',
                            m: '20px',
                            fontSize: {xs:'18px', md: '20px', lg: '32px'}
                        }}>
                            Giá trị cốt lõi

                        </MUITypography> 
                    <MUIGrid container>
                        <MUIGrid 
                            item 
                            lg={6} 
                            md={6}
                            sx={{
                                'ul':{
                                    pr: '5%',
                                    'li':{
                                        color: style.TEXT_LIST_EXPAND_COLOR,
                                        fontSize: { xs: '16px', lg: '17px' },
                                        fontFamily: FONT_FAMILY.MONTSERRAT,
                                        mb: '20px',
                                        fontWeight: '500',
                                        lineHeight: '35px',
                                    }
                                }
                            }}
                        >
                            <ul   
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="2000">
                                {valuesContent.map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })}
                            </ul>
                        </MUIGrid>
                        <MUIGrid item lg={6} md={6}>
                            <MUIBox  
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="2000">
                                <ImageStyled src={Truck.src} alt=''/>
                            </MUIBox>

                        </MUIGrid>
                    </MUIGrid>
                    <StaffContent />
                    <SubFooter />
                </MUIBox>
            </ContentStyled>
        </>

    )
}

export default About