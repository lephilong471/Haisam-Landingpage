import { MUIBox, MUITypography } from "../MUI"
import {style} from '@/app/config'

const Footer = () => {
    return (
        <MUIBox sx={{   
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            width:'100%',
            position:'fixed',
            bottom:'0px',
        }}>
            <MUITypography sx={{
                fontFamily:'Montserrat',
                fontSize: '12px',
                fontWeight:'bold',
                color: style.TEXT_COLOR_FOOTER,
                py:'22px',
            }}>
                ©2024 HAISAM - QUÃNG NINH
            </MUITypography>
        </MUIBox>
    )
}

export default Footer