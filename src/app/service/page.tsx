"use client"
import React, { useState, useEffect } from "react";
import {
   MUIBox,
   MUIListItemButton,
   MUIListItemText,
   MUICollapse,
   MUIList,
   MUIGrid,
   MUITypography
} from "../components/MUI";


import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import styled from "styled-components";
import { style, FONT_FAMILY } from "../config";


import AOS from "aos";
import dynamic from "next/dynamic";
const SplittingText = dynamic(() => import('@/app/components/Home/Content/SplittingText'), { ssr: false })

// import Image from "next/image";
const ContentStyled = styled(MUIBox)`
  
`

const ImageStyled = styled.img`
   max-width: 100%;
   padding: 10px;
   width: 100%;
   // @keyframes image-animation{
   //    0%{
   //       transform: translate3d(0px, 100px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)
   //    }

   //    100%{
   //       translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)
   //    }
   // }
  
   // animation: image-animation 3s infinite;
`

const Service = () => {
   useEffect(() => {
      AOS.init()
   }, [])
   const [expandData, setExpandData] = useState<Array<object>>([[true, false, false], [true, false, false]])


   const handleExpand = (expand: number, index: number) => {
      setExpandData(
         prevArr => {
            let newArr = { ...prevArr }
            if (newArr[expand][index]) {
               newArr[expand][index] = false
               return newArr
            }
            else {
               newArr[expand] = new Array((Object(prevArr[expand]).length)).fill(false)
               newArr[expand][index] = true
               return newArr
            }
         }
      )

   }

   const listServiceData = [
      'Dịch vụ cho thuê kho', 'Dịch vụ cho thuê xe tải',
      'Dịch vụ vận tải', 'Dịch vụ bốc xếp hàng hóa',
      'Dịch vụ xuất nhập khẩu', 'Dịch vụ ghép hàng đi tỉnh',
      'Dịch vụ giao hàng', 'Đại lý hải quan'
   ]
   // const listExpandData = [
   //    [
   //       {
   //          'title': 'Transportation Management',
   //          'content': 'This service involves planning, optimizing, and executing the movement of goods from one location to another. It encompasses various modes of transportation such as road, rail, sea, and air, ensuring timely and cost-effective deliveries.'
   //       },
   //       {
   //          'title' : 'Warehousing and Distribution',
   //          'content': 'Warehousing involves storing goods in a secure facility, while distribution ensures the efficient movement of those goods to their final destinations. These services are vital for managing inventory, fulfilling orders, and reducing delivery times.'
   //       },
   //       {
   //          'title': 'Freight Forwarding',
   //          'content': 'Freight forwarders act as intermediaries between shippers and carriers, arranging the transportation of goods across various modes and routes. They handle documentation, customs clearance, and negotiations with carriers to ensure smooth shipments.'
   //       }
   //    ],
   //    [
   //       {
   //          'title': 'Customs Brokerage',
   //          'content':'Customs brokers facilitate the clearance of goods through customs checkpoints, ensuring compliance with import and export regulations. They handle documentation, taxes, duties, and liaise with government agencies on behalf of clients.'
   //       },
   //       {
   //          'title': 'Last-Mile Delivery',
   //          'content': 'Last-mile delivery focuses on the final leg of the supply chain, delivering products from distribution centers to the end customers\' doorsteps. It\'s a critical service in e-commerce and requires efficient routing and timely delivery to ensure customer satisfaction.'
   //       },
   //       {
   //          'title':'Reverse Logistics',
   //          'content': 'Reverse logistics involves managing the return of products from customers to the manufacturer or retailer. This includes handling returns, repairs, refurbishing, recycling, or proper disposal of goods.'
   //       }
   //    ]
   // ]
   const listExpandData = [
      [
         {
            'title': 'Dịch vụ cho thuê kho',
            'content': 'Dịch vụ cho thuê kho chung của Công ty Hải Sâm là giải pháp lưu trữ hiệu quả và tiết kiệm cho các doanh nghiệp \
                        có nhu cầu lưu trữ hàng hóa nhưng không muốn đầu tư vào một kho riêng lẻ. \
                        Với hệ thống kho hàng hơn …m2 ở …, khách hàng sẽ được hưởng lợi từ cơ sở vật chất hiện đại, \
                        hệ thống an ninh nghiêm ngặt và quản lý chuyên nghiệp. \
                        Việc chia sẻ kho bãi không chỉ giúp tiết kiệm chi phí mà còn mang lại sự linh hoạt \
                        trong quản lý hàng tồn kho, đặc biệt phù hợp với các doanh nghiệp vừa và nhỏ. \
                        Hải Sâm luôn sẵn sàng hỗ trợ khách hàng trong mọi khâu từ tiếp nhận, \
                        lưu trữ đến vận chuyển hàng hóa. Lựa chọn dịch vụ cho thuê kho chung của Hải Sâm, \
                        khách hàng sẽ có giải pháp lưu trữ an toàn, tiện lợi và hiệu quả, \
                        giúp tập trung nguồn lực vào hoạt động kinh doanh chính.'

         },
         {
            'title': 'Dịch vụ vận tải',
            'content': 'Công ty Hải Sâm tự hào cung cấp dịch vụ vận tải toàn diện, \
                        đáp ứng mọi nhu cầu vận chuyển của khách hàng. \
                        Với đội ngũ nhân viên giàu kinh nghiệm, cùng số lượng lớn phương tiện vận chuyển, \
                        Hải Sâm đảm bảo hàng hóa của bạn được giao nhận một cách nhanh chóng và an toàn. \
                        Chúng tôi cung cấp các dịch vụ vận chuyển bằng đường hàng không, \
                        đường bộ và đường thủy, phục vụ cả trong nước và quốc tế. \
                        Đội xe tải, xe container của chúng tôi luôn sẵn sàng đáp ứng mọi yêu cầu vận chuyển, \
                        từ những lô hàng nhỏ lẻ đến những dự án lớn. \
                        Hải Sâm cam kết mang đến cho khách hàng giải pháp vận chuyển hiệu quả, \
                        tiết kiệm chi phí và thời gian, giúp bạn yên tâm tập trung vào hoạt động kinh doanh chính của mình.'
         },
         {
            'title': 'Dịch vụ xuất nhập khẩu',
            'content': 'Công ty Hải Sâm cung cấp dịch vụ xuất nhập khẩu chuyên nghiệp, \
                        giúp doanh nghiệp tối ưu hóa quá trình giao thương quốc tế. \
                        Với sự am hiểu sâu sắc về quy trình và quy định hải quan, \
                        đảm bảo thủ tục nhanh chóng và chính xác cho các đơn hàng của bạn. \
                        Đội ngũ nhân viên của Hải Sâm giàu kinh nghiệm và chuyên môn cao, \
                        luôn sẵn sàng tư vấn và hỗ trợ khách hàng trong mọi khâu của quá trình xuất nhập khẩu. \
                        Hải Sâm cam kết mang đến dịch vụ xuất nhập khẩu hiệu quả, \
                        giúp khách hàng tiết kiệm chi phí và thời gian, \
                        nâng cao năng lực cạnh tranh trên thị trường quốc tế. \
                        Lựa chọn dịch vụ xuất nhập khẩu của Hải Sâm, khách hàng sẽ được hưởng những lợi ích tối ưu, \
                        từ tư vấn, xử lý thủ tục hải quan, \
                        đến vận chuyển và giao nhận hàng hóa một cách chuyên nghiệp và đáng tin cậy.'
         }
      ],
      [
         {
            'title': 'Dịch vụ cho thuê xe tải chở hàng',
            'content': 'Công ty Hải Sâm cung cấp dịch vụ cho thuê xe tải chở hàng chuyên nghiệp, \
                     đáp ứng mọi nhu cầu vận chuyển hàng hóa của khách hàng. \
                     Chúng tôi sở hữu đội xe tải đa dạng về tải trọng và kích thước, từ xe tải nhỏ đến xe container,\
                     phù hợp với mọi loại hàng hóa từ nhỏ lẻ đến cồng kềnh.\
                     Các xe tải của Hải Sâm đều được bảo dưỡng định kỳ và trang bị hệ thống giám sát hiện đại, \
                     đảm bảo an toàn và hiệu quả trong suốt quá trình vận chuyển. \
                     Chúng tôi cung cấp dịch vụ cho thuê xe tải linh hoạt, \
                     phù hợp với mọi nhu cầu từ vận chuyển nội thành đến liên tỉnh và quốc tế. \
                     Khách hàng có thể thuê xe theo giờ, theo ngày hoặc theo tháng tùy theo nhu cầu. \
                     Đội ngũ lái xe của chúng tôi đều có kinh nghiệm lâu năm và am hiểu các tuyến đường, \
                     đảm bảo hàng hóa được vận chuyển nhanh chóng và hiệu quả.'
         },
         {
            'title': 'Dịch vụ bốc xếp, nâng hạ hàng hóa',
            'content': 'Công ty Hải Sâm cung cấp dịch vụ bốc xếp và nâng hạ hàng hóa chuyên nghiệp, \
                        đáp ứng mọi nhu cầu xử lý hàng hóa của khách hàng. \
                        Chúng tôi sử dụng các thiết bị nâng hạ hiện đại như xe nâng, cẩu trục, và các dụng cụ hỗ trợ khác \
                        để xử lý hàng hóa một cách an toàn và hiệu quả, giảm thiểu rủi ro hư hỏng hàng hóa. \
                        Sử dụng dịch vụ bốc xếp và nâng hạ hàng hóa của Hải Sâm giúp khách hàng tiết kiệm chi phí \
                        so với việc tự đầu tư vào nhân lực và trang thiết bị, đồng thời tối ưu hóa quy trình vận hành.'
         },
         {
            'title': 'Dịch vụ ghép hàng đi tỉnh',
            'content': 'Hải Sâm cung cấp dịch vụ ghép hàng đi tỉnh, mang lại giải pháp vận chuyển tiết kiệm và hiệu quả \
                        cho khách hàng có nhu cầu gửi hàng với số lượng nhỏ lẻ. Bằng cách ghép hàng hóa của nhiều khách hàng \
                        trên cùng một chuyến xe, chi phí vận chuyển được chia sẻ, giúp giảm thiểu chi phí cho từng lô hàng nhỏ lẻ. \
                        Chúng tôi cung cấp các chuyến xe ghép hàng đều đặn và liên tục đến các tỉnh thành trên toàn quốc, \
                        đáp ứng nhu cầu vận chuyển nhanh chóng và linh hoạt của khách hàng. \
                        Hải Sâm cam kết đảm bảo an toàn cho hàng hóa của khách hàng trong suốt quá trình vận chuyển. \
                        Chúng tôi sử dụng các phương tiện hiện đại và đội ngũ lái xe giàu kinh nghiệm để bảo vệ hàng hóa \
                        khỏi các rủi ro hư hỏng.'
         },
         {
            'title': 'Dịch vụ giao hàng',
            'content': 'Hải Sâm cung cấp dịch vụ giao hàng chuyên nghiệp, nhanh chóng và an toàn, \
                        đáp ứng mọi nhu cầu vận chuyển hàng hóa của khách hàng. Với đội ngũ nhân viên chuyên nghiệp, \
                        quy trình làm việc rõ ràng, chúng tôi cam kết mang đến dịch vụ giao hàng tối ưu, \
                        giúp khách hàng tiết kiệm thời gian và chi phí. Hải Sâm cam kết giao hàng đúng thời gian và địa điểm yêu cầu. \
                        Hàng hóa của khách hàng được bảo quản cẩn thận và vận chuyển an toàn với các phương tiện hiện đại \
                        và đội ngũ lái xe có kinh nghiệm, luôn tuân thủ nghiêm ngặt các quy định về an toàn giao thông và bảo vệ hàng hóa.\
                        Dịch vụ giao hàng của Hải Sâm đáp ứng mọi nhu cầu từ giao hàng nhỏ lẻ đến hàng hóa lớn, từ giao hàng nội thành đến các tỉnh thành xa. \
                        Chúng tôi cung cấp các giải pháp giao hàng đa dạng, bao gồm giao hàng tiêu chuẩn, giao hàng nhanh, và giao hàng siêu tốc. Đội ngũ nhân viên tận tâm và chuyên nghiệp của Hải Sâm luôn sẵn sàng hỗ trợ khách hàng trong mọi khâu từ tiếp nhận đơn hàng, xử lý yêu cầu đến giải đáp thắc mắc, đảm bảo sự hài lòng cao nhất cho khách hàng.'
         },
         {
            'title': 'Đại lý hải quan',
            'content': 'Với vai trò là một đại lý hải quan, Hải Sâm giúp khách hàng giải quyết mọi thủ tục hải quan \
                        một cách nhanh chóng và hiệu quả. Với đội ngũ chuyên gia giàu kinh nghiệm và \
                        hiểu biết sâu sắc về các quy định hải quan, chúng tôi cam kết mang đến cho khách hàng dịch vụ tối ưu, \
                        đảm bảo hàng hóa thông quan thuận lợi và đúng pháp luật. Chúng tôi xử lý nhanh chóng các thủ tục hải quan, \
                        giúp hàng hóa của khách hàng thông quan nhanh chóng, tiết kiệm thời gian và giảm thiểu các chi phí phát sinh do chậm trễ. \
                        Hải Sâm cung cấp đầy đủ các dịch vụ liên quan đến hải quan như khai báo hải quan, kiểm tra hàng hóa, đóng hàng, \
                        rút hàng tại cảng, và các dịch vụ liên quan khác, đáp ứng mọi nhu cầu của khách hàng. Với sự am hiểu sâu sắc về quy định và thủ tục hải quan, \
                        chúng tôi giúp khách hàng giảm thiểu rủi ro về pháp lý và các vấn đề phát sinh trong quá trình thông quan hàng hóa.'
         }
      ]
   ]

   return (
      <ContentStyled>
         <MUIBox className='container mx-auto'>
            <MUIGrid container sx={{ my: '4%' }}>
               <MUIGrid item md={12} lg={6} xs={12}>
                  <SplittingText props={['Logistics']} />
               </MUIGrid>
               <MUIGrid
                  item
                  md={12}
                  lg={6}
                  xs={12}
                  sx={{
                     display: 'flex',
                     alignItems: 'center'
                  }}
               >
                  <MUIGrid
                     container
                     sx={{
                        '.MuiBox-root': {
                           display: 'flex',
                           padding: '1px'
                        },
                        '.MuiBox-root .MuiTypography-root': {
                           pl: '5px',
                           fontFamily: FONT_FAMILY.MONTSERRAT,
                           fontWeight: 500,
                        },
                     }}
                  >
                     <MUIGrid item md={6} xs={12} sx={{p:"10px"}}>
                        {listServiceData.map((item, index) => {
                           return (
                              index % 2 === 0 && (
                                 <MUIBox 
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="2000"
                                 >
                                    <AddRoundedIcon sx={{ color: style.TEXT_COLOR_GENERAL }} />
                                    <MUITypography color={style.TEXT_COLOR_GENERAL}>{item}</MUITypography>
                                 </MUIBox>
                              )
                           )
                        })}
                     </MUIGrid>
                     <MUIGrid item md={6} xs={12} sx={{p:"10px"}}>
                        {listServiceData.map((item, index) => {
                           return (
                              index % 2 !== 0 && (
                                 <MUIBox 
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="2000"
                                 >
                                    <AddRoundedIcon sx={{ color: '#202020' }} /><MUITypography color='#0E0E0E'>{item}</MUITypography>
                                 </MUIBox>
                              )
                           )
                        })}
                     </MUIGrid>
                  </MUIGrid>
               </MUIGrid>
            </MUIGrid>
            <MUITypography
               data-aos="fade-up"
               data-aos-delay="300"
               data-aos-duration="2000"
               fontSize="32px"
               color={style.TEXT_COLOR_TITLE}
               fontWeight='500'
               fontFamily={FONT_FAMILY.MONTSERRAT}
               paddingInline='10px'
            >
               Dịch vụ chính
            </MUITypography>

            <MUIGrid container>
               <MUIGrid
                  item
                  lg={6}
                  md={6}
                  sx={{ justifyContent: 'center' }}
               >
                  <ImageStyled
                     data-aos="fade-up"
                     data-aos-duration="3000"
                     src='/images/loaded-container-cargo-ship-is-seen-front-as-it-speeds-ocean-generative-ai-1300x1097.jpg'
                     alt=''
                  />
               </MUIGrid>

               <MUIGrid
                  item
                  md={6}
                  xs={12}
                  sx={{
                     '.MuiCollapse-root': {
                        transition: 'height 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
                     },
                     '.MuiBox-root .show-content': {
                        p: '4%',
                        borderBottom: '1px solid #ebebeb',
                        display: 'flex',
                        '&:hover': {
                           cursor: 'pointer'
                        },
                        'svg': {
                           color: style.TEXT_COLOR_GENERAL
                        },
                     },
                     'span': {
                        fontFamily: FONT_FAMILY.MONTSERRAT,
                        fontWeight: '500',
                        color: style.TEXT_LIST_EXPAND_COLOR,
                        fontSize: '16px',
                        lineHeight: '28px'
                     },
                     '.list-title span': {
                        fontSize: '18px',
                        color: style.TEXT_COLOR_GENERAL
                     }

                  }}
               >
                  {listExpandData[0].map((item, index) => {
                     return (
                        <MUIBox key={index}>
                           <MUIBox className='show-content' onClick={() => handleExpand(0, index)}>
                              {/* <MUIListItemIcon>
                                 <InboxIcon />
                              </MUIListItemIcon> */}
                              <MUIListItemText className='list-title' primary={item.title} />
                              {expandData[0][index] ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
                           </MUIBox>
                           <MUICollapse in={expandData[0][index]} timeout={800} unmountOnExit>
                              <MUIList component="div" disablePadding>
                                 <MUIListItemText sx={{ px: '4%', pt: '4%' }} primary={item.content} />
                              </MUIList>
                           </MUICollapse>
                        </MUIBox>
                     )
                  })}
               </MUIGrid>
            </MUIGrid>
            <MUIGrid
               container
               sx={{ mt: '4%' }}
            >
               <MUIGrid 
                  item xs={12} md={6}
                  paddingInline='4%'
               >
                  <MUITypography
                     fontSize="32px"
                     fontFamily={FONT_FAMILY.MONTSERRAT}
                     color={style.TEXT_COLOR_TITLE}
                     fontWeight='500'
                  >
                     Dịch vụ khác
                  </MUITypography>
               </MUIGrid>
            </MUIGrid>

            <MUIGrid container>
               <MUIGrid item md={6} xs={12}
                  sx={{
                     '.MuiBox-root .show-content': {
                        display: 'flex',
                        p: '4%',
                        '&:hover': {
                           cursor: 'pointer',
                        },
                        borderBottom: '1px solid #ebebeb',
                        'svg': {
                           color: style.TEXT_COLOR_GENERAL
                        }
                     },
                     'span': {
                        fontFamily: FONT_FAMILY.MONTSERRAT,
                        fontWeight: '500',
                        color: style.TEXT_LIST_EXPAND_COLOR,
                        fontSize: '16px',
                        lineHeight: '28px'
                     },
                     '.list-title span': {
                        fontSize: '18px',
                        color: style.TEXT_COLOR_GENERAL
                     }
                  }}
               >
                  {listExpandData[1].map((item, index) => {
                     return (
                        <MUIBox key={index}>
                           <MUIBox className='show-content' onClick={() => handleExpand(1, index)}>
                              <MUIListItemText className="list-title" primary={item.title} />
                              {expandData[1][index] ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
                           </MUIBox>
                           <MUICollapse in={expandData[1][index]} timeout={800} unmountOnExit>
                              <MUIList component="div" disablePadding>
                                 <MUIListItemText sx={{ p:'4%'}} primary={item.content} />
                              </MUIList>
                           </MUICollapse>
                        </MUIBox>
                     )
                  })}
               </MUIGrid>
               <MUIGrid
                  item
                  md={6}
                  lg={6}
                  xs={12}
                  sx={{
                     justifyContent: 'center'
                  }}
               >
                  <ImageStyled
                     data-aos="fade-up"
                     data-aos-duration="3000"
                     src='/images/aerial-top-view-container-cargo-ship-with-contrail-ocean-ship-carrying-container.jpg'
                     alt=''
                  />
               </MUIGrid>
            </MUIGrid>
         </MUIBox>
      </ContentStyled>
   )
};

export default Service;
