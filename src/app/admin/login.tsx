"use client"
import { MUIBox, MUITextField, MUIButton, MUITypography } from "@/app/components/MUI"
import {style } from '@/app/config'
import { useFormik } from "formik"
import * as Yup from 'yup'
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

const AdminLogin = () => {
    const errorMessage = Yup.object().shape({
        username: Yup.string().required('Trường bắt buộc nhập.'),
        password: Yup.string().required('Trường bắt buộc nhập.'),
    });
  
    const myForm = useFormik({
      initialValues: {
         username: '',
         password: '',
         submit: null,
      },

      validationSchema: errorMessage,
      onSubmit: (values, helpers) => {
         console.log(values)
      }})
      
    return (
        <MUIBox sx={{
            width: '100%',
            height: '100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            fontFamily: 'Montserrat',
            fontWeight: '600'
        }}>
            <MUIBox sx={{
                border: '2px solid #000000',
                borderRadius:'10px',
                p: '15px 50px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                textAlign:'center',
                color:'#ffffff',
            }}>
                <MUITypography sx={{
                    fontSize: '30px',
                    fontWeight: 'inherit',
                    m: '5px',
                    textAlign:'center',
                    color: style.TEXT_COLOR_TITLE,
                    fontFamily:'inherit',
                }}> 
                    HAISAM ADMIN
                </MUITypography>
                <form onSubmit={myForm.handleSubmit}>
                    <MUIBox sx={{
                        display:'flex',
                        flexDirection:'column',
                        '.MuiTextField-root':{
                            my:'10px'
                        },
                        '.MuiInputBase-root':{
                          fontFamily: 'inherit',
                          color: style.TEXT_COLOR_NORMAL,
                        },
                        '.MuiBox-root':{
                            display: 'flex',
                            justifyContent:'center',
                            '.MuiButtonBase-root':{
                                m:'10px',
                                fontWeight: '500',
                                color: '#ffffff',
                                backgroundColor: style.TEXT_COLOR_TITLE,
                                fontFamily:'inherit',
                                textTransform: 'none'
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
                        <MUITextField 
                            color='primary' 
                            variant='outlined'
                            size="small" 
                            label='Tên người dùng' 
                            type='text'
                            onBlur={myForm.handleBlur}
                            onChange={myForm.handleChange}
                            error={myForm.touched.username && Boolean(myForm.errors.username)}
                            helperText={myForm.touched.username && Boolean(myForm.errors.username) && (
                            <>
                                <WarningRoundedIcon /> {myForm.errors.username}
                            </>
                            )}
                            />
                        <MUITextField  
                            variant='outlined' 
                            size='small' 
                            label='Mật khẩu' 
                            type='password' 
                            onBlur={myForm.handleBlur}
                            onChange={myForm.handleChange}
                            error={myForm.touched.password && Boolean(myForm.errors.password)}
                            helperText={myForm.touched.password && Boolean(myForm.errors.password) && (
                            <>
                                <WarningRoundedIcon /> {myForm.errors.password}
                            </>
                            )}
                        />
                        <MUIBox>
                            <MUIButton variant='contained' type='submit'>
                                Đăng nhập
                            </MUIButton>
                        </MUIBox>
                    </MUIBox>
                </form>
            </MUIBox>
        </MUIBox>
    )
}

export default AdminLogin