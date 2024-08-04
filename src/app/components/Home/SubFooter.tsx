
import { style } from "@/app/config"
import { MUIBox, MUITypography } from "../MUI"

const SubFooter = ({background}) => {
    return (
        <MUIBox sx={{
      
       
            backgroundColor: '#040716',
            position:'relative',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <MUIBox sx={{
                backgroundImage: background ? `url(/images/${background})` : 'none',
                opacity: '0.06',
                backgroundPosition:'center center',
                width:'100%',
                height:'100%',
                position: 'absolute',
                top: '0',
                left: '0',
            }}/>
            <MUIBox sx={{
                p:'10%',
                '.MuiTypography-root':{
                    fontFamily:'Montserrat',
                    color: background ? '#ffffff !important': style.TEXT_COLOR_SUB_FOOTER ,
                    mb: '20px',
                },
                '.MuiBox-root p':{
                    fontSize: '17px',
                    fontWeight: '500',
                }
            }}>
                <MUITypography fontSize='20px' fontWeight='bold'>
                    CÔNG TY TNHH THƯƠNG MẠI VÀ XUẤT NHẬP KHẨU HẢI SÂM
                </MUITypography>
                
                <MUIBox>
                    <MUITypography>
                        Địa chỉ:  Lô 13- LK5 Khu đô thị Green Park- Móng Cái- Quảng Ninh
                    </MUITypography>
                </MUIBox>
                
                <MUIBox>
                    <MUITypography>Email: Haisamlogistics@gmail.com</MUITypography>
                </MUIBox>
                
                <MUIBox>
                    <MUITypography>
                        SĐT: 0777020707
                    </MUITypography>
                </MUIBox>

            </MUIBox>
        </MUIBox>
    )
}

export default SubFooter