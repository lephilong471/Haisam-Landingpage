"use client"

import { MUIBox, MUITypography, MUILink, MUITextField } from "../MUI"
import { headerData, style } from "@/app/config"
import { useState } from "react";

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter, usePathname } from 'next/navigation'
import { Texturina } from "next/font/google";

const Header = () => {
    const path: string = usePathname()

    const [isSearch, setIsSearch] = useState<boolean>(false)

    const handleSearch = () => {
        setIsSearch(true)
    }
    return (
        <MUIBox sx={{
            backgroundColor:'#fff',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            borderBottom: 'solid 1px black',
            px:'50px'
        }}>
            <MUITypography sx={{fontFamily:'Jost', fontWeight:'500', fontSize:'28px'}}>HAISAM.</MUITypography>
            <MUIBox sx={{
                display:'flex',
                justifyContent:'space-around',
                
            }}>
                {headerData.map((item, index) => {
                    return (

                        <MUIBox sx={{
                            px:'16px',
                            fontWeight:'500',
                            fontSize:'14px',
                            height:'90px',
                            display:'flex',
                            alignItems:'center',
                            fontFamily:'Roboto Mono',
                            fontWeigth:'bold',
                            '.MuiBox-root::before':{
                                height: '0px',
                            },
                            ':hover':{
                                cursor:'pointer',
                                '.MuiBox-root::before': {
                                    height: 'calc(100% + 30px) !important',
                                    backgroundColor:`${style.HEADER_HOVER_COLOR} !important`,
                                    clipPath: 'polygon(100% 0, 100% 100%, 0 calc(100% - 15px), 0 0)',
                                    zIndex:'1',
                                    px:'16px',
                                    transition: 'height 0.3s linear'
                                }
                             
                            },
                            // 'a':{
                            //     '.active':{
                            //         height: 'calc(100% + 30px)',
                            //         cursor:'pointer',
                            //         backgroundColor:'#000 !important',
                            //         clipPath: 'polygon(100% 0, 100% 100%, 0 calc(100% - 15px), 0 0)',
                            //         zIndex:'1',
                            //     }
                            // }         
                        }} 
                            
                            key={index}
                        >
                            <MUILink sx={{
                                display: isSearch ? 'none' :  'flex',
                                alignItems:'center',
                                color: style.TEXT_COLOR_NORMAL
                                }}
                                underline="none" 
                                href={item.link}
                                className="active"
                            >
                                {item.name}
                            </MUILink>
                        </MUIBox>
                    )
                })}
                <MUIBox sx={{
                    display:'flex', 
                    alignItems:'center',
                    '.MuiSvgIcon-root:hover':{
                        cursor:'pointer'
                    },
                    '.MuiInputBase-input':{
                        padding: '0px',
                        fontFamily:'Jost',
                        border:'none',
                    }
                    }}>
                    {isSearch ? (
                        <>
                            <MUITextField variant="standard" placeholder="nhập thông tin"/>
                            <CloseIcon onClick={() => setIsSearch(false)} />
                        </>
                    ): (
                        <SearchIcon onClick={handleSearch} />
                    )}
                </MUIBox>

            </MUIBox>

        </MUIBox>
    )
}

export default Header