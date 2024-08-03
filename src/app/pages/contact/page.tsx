"use client"
import { MUIBox, MUITypography } from "@/app/components/MUI"
import {style } from '@/app/config'
import { useState, useEffect } from "react"

const Contact = () => {
    const characters = ['L','I','Ê','N',' ','H','Ệ']
    const [animate, setAnimate] = useState<boolean>(false)
    
    useEffect(() => {
        setTimeout(() =>  setAnimate(true),1000)
    }, [])
    return (
        <MUIBox sx={{
            display:'flex'
        }}>
            {characters.map((item,index) => {
                return(
                    <MUITypography 
                        sx={{
                            fontFamily:'Montserrat',
                            fontWeight:'600',
                            color: style.TEXT_COLOR_TITLE,
                            transitionDelay: `${index * 60}ms`,
                            opacity: animate ? '1' : '0',
                            transform: animate ? 'translateX(0) translateZ(0)' : 'translateX(50px)',
                            transition: animate ? '' : 'opacity 1 .25s, transform .45s cubic-bezier(.26,-.14,0,1.01)'

                            
                        }}
                        variant="h1"
                        key={index}
                    >
                        {item === ' ' ? ' ' : item}
                </MUITypography>
                )
            })}
           
        </MUIBox>
    )
}

export default Contact