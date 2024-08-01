import { MUIBox, MUITypography } from "../MUI"
import {style} from '@/app/config'

const Footer = () => {
    return (
        <MUIBox sx={{   
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:'100%',
            bottom:'0px',
            position:'fixed'
        }}>
            <MUITypography sx={{
                fontFamily:'Roboto Mono',
                fontSize: '12px',
                fontWeight:'bold',
                color: style.TEXT_COLOR_FOOTER,
                py:'22px',
            }}>
                ©2024 HAISAM - QUÃNG NGÃI
            </MUITypography>
        </MUIBox>
    )
}

export default Footer