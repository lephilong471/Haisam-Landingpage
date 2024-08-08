"use client"
import { useState } from "react"
import { 
    MUIBox, 
    MUITypography, 
    MUIGrid,
    MUICard,
    MUICardActions,
    MUICardContent,
    MUICardMedia,
    MUIButton,
    MUIPopover,
    MUIMenu,
    MUILink
} from "@/app/components/MUI"
import Popper from '@mui/material/Popper';
import styled from "styled-components"
import { style, FONT_FAMILY } from "@/app/config"

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import SVG from 'react-inlinesvg';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


const ContentStyled = styled(MUIBox)`
    
    .MuiTypography-root{
        font-family: ${FONT_FAMILY.MONTSERRAT};
        font-weight: 400;
        color: ${style.TEXT_LIST_EXPAND_COLOR};
    }

    .MuiPaper-root{
        box-shadow: none;
        border-radius: 0;
        padding-inline: 14px;
        margin-bottom: 34px;
    }

    .MuiCardContent-root{
        padding-inline: 1.2em;
        padding-top: 1.8em;
        .card-title{
            color: ${style.TEXT_COLOR_TITLE} !important;
            font-weight: bold;
            font-size: 22px;
            margin:0;
        }


        .card-content{
            font-size: 13px;
            line-height: 25px;
            font-weight: 500;
            padding-top: 12px;
        }

        .card-sub-title {
            display: flex;
            // flex: start;
            flex-wrap: wrap;
            margin: 6px 0;

            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            font-family: ${FONT_FAMILY.MONTSERRAT};
            color: ${style.TEXT_LIST_EXPAND_COLOR};

            .created {
                display: flex;
                align-items: center;
                margin-inline:12px;
                &:hover{
                    cursor: pointer;
                }
            }

            .type{
                border: 1px solid rgba(0, 0, 0, 0.12);
                padding: 2px 12px;
                border-radius: 16px;
                font-size: inherit;
                font-weight: inherit;
                &:hover{
                    cursor: pointer;
                }
            }

            .share{
                display: flex;
                align-items: center;
                &:hover{
                    cursor: default;
                }
            }

            svg{
                margin-right: 6px;
                font-size: 1.2em;
                color:inherit;
            }
        }
    }
`

const displayContent = (text: string) => {
    const textArr: Array<string> = text.split(' ')
    let result: string = ''

    if(textArr.length <= 22) return text

    for(let i = 0 ; i < 22; i++){
        if(i === 22 - 1) result += `${textArr[i]}...`
        else result += `${textArr[i]} `
    }
    return result
}

const About = () => {

    const cardData = [
        {
            image: 'futuristic-truck.jpg',
            title: 'Last-Mile Delivery Innovations',
            created: 'MAY 18, 2023',
            content: 'Micro-fulfillment centers are small, automated warehouses located in urban areas. They enable retailers and e-commerce companies to store products closer to consumers, reducing delivery distances and time. These centers use robotics and automation to quickly process orders.',
            type: 'News'
        },
        {
            image: 'futuristic-truck.jpg',
            title: 'Last-Mile Delivery Innovations',
            created: 'MAY 18, 2023',
            content: 'Micro-fulfillment centers are small, automated warehouses located in urban areas. They enable retailers and e-commerce companies to store products closer to consumers, reducing delivery distances and time. These centers use robotics and automation to quickly process orders.',
            type: 'News',
        },
        {
            image: 'futuristic-truck.jpg',
            title: 'Last-Mile Delivery Innovations',
            created: 'MAY 18, 2023',
            content: 'Micro-fulfillment centers are small, automated warehouses located in urban areas. They enable retailers and e-commerce companies to store products closer to consumers, reducing delivery distances and time. These centers use robotics and automation to quickly process orders.',
            type: 'News'
        },
        {
            image: 'futuristic-truck.jpg',
            title: 'Last-Mile Delivery Innovations',
            created: 'MAY 18, 2023',
            content: 'Micro-fulfillment centers are small, automated warehouses located in urban areas. They enable retailers and e-commerce companies to store products closer to consumers, reducing delivery distances and time. These centers use robotics and automation to quickly process orders.',
            type: 'News'
        },
        {
            image: 'futuristic-truck.jpg',
            title: 'Last-Mile Delivery Innovations',
            created: 'MAY 18, 2023',
            content: 'Micro-fulfillment centers are small, automated warehouses located in urban areas. They enable retailers and e-commerce companies to store products closer to consumers, reducing delivery distances and time. These centers use robotics and automation to quickly process orders.',
            type: 'Insight',
        },
        {
            image: 'futuristic-truck.jpg',
            title: 'Last-Mile Delivery Innovations',
            created: 'MAY 18, 2023',
            content: 'Micro-fulfillment centers are small, automated warehouses located in urban areas. They enable retailers and e-commerce companies to store products closer to consumers, reducing delivery distances and time. These centers use robotics and automation to quickly process orders.',
            type: 'Insight'
        },
    ]

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const [open, setOpen] = useState(false);

    
    const handlePopperOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };
  
    const handlePopperClose = () => {
      setAnchorEl(null);
      setOpen((previousOpen) => !previousOpen);

    };

    return (
        <ContentStyled>
            <MUIBox className='container mx-auto py-5'>
                <MUIBox sx={{
                    textAlign:'center'
                }}>
                    <MUITypography sx={{
                        fontSize: '80px',
                        fontWeight: 'bold !important' ,
                        color: `${style.TEXT_COLOR_TITLE} !important`
                    }}
                    >
                        Tin tức
                    </MUITypography>
                </MUIBox>
                <MUIGrid container className='my-5 py-5'>
                    {cardData.map((item: any, index: number) => {
                        return (
                            <MUIGrid 
                                item 
                                md={6} 
                                lg={4}
                                xs={12}  
                                key={index}
                                sx={{
                                    display:'flex',
                                    justifyContent:'center',
                                }}
                            >
                                <MUICard>
                                    <MUICardMedia
                                    component="img"
                                    //   alt="green iguana"
                                    //   height="140"
                                    image={`images/slider/${item.image}`}
                                    />
                                    <MUICardContent>
                                        <MUITypography gutterBottom className='card-title'>
                                            {item.title}
                                        </MUITypography>
                                        <MUIBox className='card-sub-title'>
                                            <MUITypography className='type'>
                                                {item.type}
                                            </MUITypography>

                                            <MUIBox className='created'>
                                                <CalendarTodayOutlinedIcon /> {item.created}
                                            </MUIBox>
                                            <MUIBox
                                                aria-describedby={`${index}`}
                                                aria-owns={open ? `mouse-over-popper-${index}` : undefined}
                                                aria-haspopup="true"
                                                onMouseEnter={handlePopperOpen}
                                                className='share'>
                                                <ShareOutlinedIcon />
                                                Share
                                            </MUIBox>

                                            <Popper 
                                                id={`mouse-over-popper-${index}`} 
                                                open={open} 
                                                anchorEl={anchorEl}
                                                onMouseLeave={handlePopperClose}
                                                sx={{
                                                    marginTop:'50px',
                                                    maxHeight:200
                                                }}
                                            >
                                                <MUIBox sx={{
                                                    position:'absolute',
                                                    top: '10px',
                                                    right: '-70px',
                                                    filter: open ? 'blur(0px)' : 'blur(15px)',
                                                    background: '#ffffff',
                                                    borderTop: '1px solid #eee',
                                                    transition: 'filter 0.15s ease-out',
                                                    '&:after, &:before': {
                                                        borderLeft: '8px solid transparent',
                                                        borderRight: '8px solid transparent',
                                                        borderBottom: '9px solid white',
                                                        top: '-8px',
                                                        content: '""',
                                                        left: '50%',
                                                        marginLeft: '-9px',
                                                        position: 'absolute'
                                                    },
                                                    
                                                    /* Styling for second triangle (border) */
                                                    
                                                    '&:before': {
                                                        borderLeft: '9px solid transparent',
                                                        borderRight: '8px solid transparent',
                                                        borderBottom: '10px solid #eee',
                                                        // borderBottomColor: 'inherit', /* Can't be included in the shorthand to work */
                                                        top: '-10px',
                                                        marginLeft: '-10px'
                                                    },
                                                    '.MuiLink-root':{
                                                        display:'flex',
                                                        alignItems: 'center',
                                                        p: '10px 16px',
                                                        border: '1px solid #eee',
                                                        borderTop:'0px',
                                                        color: style.TEXT_LIST_EXPAND_COLOR,

                                                        '.MuiTypography-root':{
                                                            color: 'inherit',
                                                            fontFamily: FONT_FAMILY.MONTSERRAT,
                                                            fontWeight:'700',
                                                            fontSize: '11px',
                                                            textTransform:'uppercase',
                                                        },
                                                        'svg':{
                                                            fontSize: '.875em',
                                                            width: '10px',
                                                            height: '10px',
                                                            mr: '8px',
                                                        }
                                                    },
                                                }}>
                                                    <MUILink href="#" sx={{
                                                        '&:hover':{
                                                            color: `${style.FACEBOOK_COLOR} !important`
                                                        }
                                                    }}>
                                                        <FaFacebookF />
                                                        <MUITypography>Facebook</MUITypography>
                                                    </MUILink>

                                                    <MUILink  href="#"  sx={{
                                                        '&:hover':{
                                                            color: `${style.TWITTER_COLOR} !important`
                                                        }
                                                    }}>
                                                        <FaTwitter />
                                                        <MUITypography>Twitter</MUITypography>
                                                    </MUILink>

                                                    <MUILink  href="#"  sx={{
                                                        '&:hover':{
                                                            color: `${style.PINTEREST_COLOR} !important`
                                                        }
                                                    }}>
                                                        <FaPinterestP />
                                                        <MUITypography>Pinterest</MUITypography>
                                                    </MUILink>

                                                    <MUILink  href="#"  sx={{
                                                        '&:hover':{
                                                            color: `${style.EMAIL_COLOR} !important`
                                                        }
                                                    }}>
                                                        <MdOutlineEmail />
                                                        <MUITypography>Email</MUITypography>
                                                    </MUILink>
                                                </MUIBox>
                                            </Popper>
                                        </MUIBox>
                                        <MUITypography className='card-content'>
                                            {displayContent(item.content)}
                                        </MUITypography>
                                    </MUICardContent>
                                    <MUICardActions>
                                    <MUILink>
                                        
                                    </MUILink>
                                    <MUIBox sx={{
                                        borderBottom: '3px solid rgba(0, 0, 0, 0.07)',
                                        mx:'4%',
                                        '&:hover':{
                                            paddingInline: '15px',
                                            transition: 'all 0.15s ease-in-out'
                                        }
                                    }}>
                                        <MUILink href="#"
                                            sx={{
                                            color: `${style.TEXT_LIST_EXPAND_COLOR} !important`,
                                            fontWeight: '600 !important',
                                            fontSize: '11px',
                                            textTransform: 'uppercase',
                                        }}>Xem thêm</MUILink>
                                    </MUIBox>
                                    </MUICardActions>
                            </MUICard>
                            </MUIGrid>
                        )
                    })}
                </MUIGrid>
            </MUIBox>
        </ContentStyled>
    )
}

export default About