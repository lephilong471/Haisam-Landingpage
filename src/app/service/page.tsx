"use client"
import React, {useState, useEffect} from "react";
import ServiceContent from "../components/Home/Content/ServiceContent";

import { 
   MUIBox,
   MUIListItemButton, 
   MUIListItemText, 
   MUICollapse,
   MUIList,
   MUIGrid
} from "../components/MUI";


import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import styled from "styled-components";
import { style, FONT_FAMILY } from "../config";

const ContentStyled = styled(MUIBox)`

`
const Service = () => {
   const [expandData, setExpandData] = useState<Array<object>>([[true, false, false],[true, false, false]])


   const handleExpand = (expand: number, index: number) => {
      setExpandData(
            prevArr => {
               let newArr = {...prevArr}
               if(newArr[expand][index]){
                  newArr[expand][index] = false
                  return newArr
               }
               else{
                  newArr[expand] = new Array((Object(prevArr[expand]).length)).fill(false)
                  newArr[expand][index] = true
                  return newArr
               }
            }
         )

      }
 
   const listExpandData = [
      [
         {
            'title': 'Transportation Management',
            'content': 'This service involves planning, optimizing, and executing the movement of goods from one location to another. It encompasses various modes of transportation such as road, rail, sea, and air, ensuring timely and cost-effective deliveries.'
         },
         {
            'title' : 'Warehousing and Distribution',
            'content': 'Warehousing involves storing goods in a secure facility, while distribution ensures the efficient movement of those goods to their final destinations. These services are vital for managing inventory, fulfilling orders, and reducing delivery times.'
         },
         {
            'title': 'Freight Forwarding',
            'content': 'Freight forwarders act as intermediaries between shippers and carriers, arranging the transportation of goods across various modes and routes. They handle documentation, customs clearance, and negotiations with carriers to ensure smooth shipments.'
         }
      ],
      [
         {
            'title': 'Customs Brokerage',
            'content':'Customs brokers facilitate the clearance of goods through customs checkpoints, ensuring compliance with import and export regulations. They handle documentation, taxes, duties, and liaise with government agencies on behalf of clients.'
         },
         {
            'title': 'Last-Mile Delivery',
            'content': 'Last-mile delivery focuses on the final leg of the supply chain, delivering products from distribution centers to the end customers\' doorsteps. It\'s a critical service in e-commerce and requires efficient routing and timely delivery to ensure customer satisfaction.'
         },
         {
            'title':'Reverse Logistics',
            'content': 'Reverse logistics involves managing the return of products from customers to the manufacturer or retailer. This includes handling returns, repairs, refurbishing, recycling, or proper disposal of goods.'
         }
      ]
   ]

   return (
      <ContentStyled>
         <MUIBox 
            className='container mx-auto'
            sx={{
               '.MuiListItemButton-root .MuiTypography-root':{
                  fontSize: '20px',
                  color: style.TEXT_COLOR_GENERAL
               },
               '.MuiTypography-root':{
                  fontFamily: FONT_FAMILY.MONTSERRAT,
                  fontWeight: '500',
                  color: style.TEXT_LIST_EXPAND_COLOR,
                  fontSize: '17px'
               }
            }}
         >
            <MUIGrid container>
               <MUIGrid item md={6} xs={12}>

               </MUIGrid>

               <MUIGrid item md={6} xs={12}>
                  {listExpandData[0].map((item, index) => {
                  return (
                     <MUIBox key={index}>
                        <MUIListItemButton onClick={() => handleExpand(0, index)}>
                           {/* <MUIListItemIcon>
                              <InboxIcon />
                           </MUIListItemIcon> */}
                           <MUIListItemText primary={item.title} />
                           {expandData[0][index] ?  <RemoveRoundedIcon /> : <AddRoundedIcon />}
                        </MUIListItemButton>
                        <MUICollapse in={expandData[0][index]} timeout="auto" unmountOnExit>
                           <MUIList component="div" disablePadding>
                              <MUIListItemText sx={{px: '16px'}} primary={item.content} />
                           </MUIList>
                        </MUICollapse>
                     </MUIBox>
                  )
               })}   
               </MUIGrid>
            </MUIGrid>
            <MUIGrid container>
               <MUIGrid item md={6} xs={12}>
                  {listExpandData[1].map((item, index) => {
                     return (
                        <MUIBox key={index}>
                           <MUIListItemButton onClick={() => handleExpand(1, index)}>
                              <MUIListItemText primary={item.title} />
                              {expandData[1][index] ?  <RemoveRoundedIcon /> : <AddRoundedIcon />}
                           </MUIListItemButton>
                           <MUICollapse in={expandData[1][index]} timeout="auto" unmountOnExit>
                              <MUIList component="div" disablePadding>
                                 <MUIListItemText sx={{px: '16px'}} primary={item.content} />
                              </MUIList>
                           </MUICollapse>
                        </MUIBox>
                     )
                  })}    
               </MUIGrid>
               <MUIGrid item md={6} xs={12}>
                  
               </MUIGrid>
            </MUIGrid>
         </MUIBox>
       
      </ContentStyled>
   )
};

export default Service;
