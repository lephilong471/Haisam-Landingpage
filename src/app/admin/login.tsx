import { MUIBox, MUITextField, MUIButton, MUITypography } from "@/app/components/MUI"
import {style } from '@/app/config'
const AdminLogin = () => {
    return (
        <MUIBox sx={{
            width: '100%',
            height: '100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
        }}>
            <MUIBox sx={{
                width: '320px',
                border: '2px solid #000000',
                borderRadius:'10px',
                p: '25px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textAlign:'center',
                color:'#ffffff',
                '.MuiTextField-root':{
                    m:'10px',
                    
                },
                '.MuiInputBase-root':{
                  fontFamily: 'Jost',
                  color: style.TEXT_COLOR_NORMAL
                },

                '.MuiBox-root':{

                    display: 'flex',
                    justifyContent:'center',
                    '.MuiButtonBase-root':{
                        mt:'10px',
                        fontFamily:'Roboto Mono',
                        fontWeight: '500',
                        color: '#ffffff',
                        width: '40%',
                        backgroundColor: style.TEXT_COLOR_TITLE
                    },
                },
            }}>
                 <MUITypography sx={{
                    fontFamily:'Roboto Mono',
                    fontSize: '30px',
                    fontWeight: '500',
                    m: '5px',
                    textAlign:'center',
                    color: style.TEXT_COLOR_TITLE,
                }}> 
                    HAISAM ADMIN
                </MUITypography>
                <MUITextField 
                    color='primary' 
                    variant='outlined'
                    size="small" 
                    label='Nhập tên người dùng' 
                    type='text'/>
                <MUITextField  
                    variant='outlined' 
                    size='small' 
                    label='Mật khẩu' 
                    type='password' 
                />
                <MUIBox>
                    <MUIButton>
                        Đăng nhập
                    </MUIButton>
                </MUIBox>

            </MUIBox>
        </MUIBox>
    )
}

export default AdminLogin