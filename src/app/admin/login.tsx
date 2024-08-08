"use client";
import { MUIBox, MUITextField, MUIButton, MUITypography } from "@/app/components/MUI";
import { style } from "@/app/config";
import { Form } from "antd";

const AdminLogin = () => {
   const [form] = Form.useForm();
   const handleSubmit = async (values) => {
      const body = {
         username: values.username,
         password: values.password,
      };

      const response = await fetch("http://haisamlogistics.com:8099/api/v1/admin/authenticate", {
         method: "POST",
         headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(body),
      });

      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
   };

   return (
      <MUIBox
         sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontFamily: "Montserrat",
            fontWeight: "600",
         }}
      >
         <MUIBox
            sx={{
               border: "2px solid #000000",
               borderRadius: "10px",
               p: "15px 50px",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               textAlign: "center",
               color: "#ffffff",
            }}
         >
            <MUITypography
               sx={{
                  fontSize: "30px",
                  fontWeight: "inherit",
                  m: "5px",
                  textAlign: "center",
                  color: style.TEXT_COLOR_TITLE,
                  fontFamily: "inherit",
               }}
            >
               HAISAM ADMIN
            </MUITypography>
            <MUIBox
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  ".MuiTextField-root": {
                     my: "10px",
                  },
                  ".MuiInputBase-root": {
                     fontFamily: "inherit",
                     color: style.TEXT_COLOR_NORMAL,
                  },
                  ".MuiBox-root": {
                     display: "flex",
                     justifyContent: "center",
                     ".MuiButtonBase-root": {
                        m: "10px",
                        fontWeight: "500",
                        color: "#ffffff",
                        backgroundColor: style.TEXT_COLOR_TITLE,
                        fontFamily: "inherit",
                        textTransform: "none",
                     },
                  },
                  ".Mui-error": {
                     fontWeight: "500",
                     color: `${style.TEXT_COLOR_ERROR} !important`,
                     fontSize: "14px",
                     display: "flex",
                     alignItems: "center",
                     mt: "10px",
                  },
                  ".Mui-error svg": {
                     fontSize: "20px",
                  },
               }}
            >
               <Form form={form} onFinish={handleSubmit}>
                  <Form.Item name="username">
                     <MUITextField
                        color="primary"
                        variant="outlined"
                        size="small"
                        label="Tên người dùng"
                        type="text"
                        name="username"
                     />
                  </Form.Item>
                  <Form.Item name="password">
                     <MUITextField variant="outlined" size="small" label="Mật khẩu" type="password" name="password" />
                  </Form.Item>
                  <MUIBox>
                     <MUIButton variant="contained" type="submit">
                        Đăng nhập
                     </MUIButton>
                  </MUIBox>
               </Form>
            </MUIBox>
         </MUIBox>
      </MUIBox>
   );
};

export default AdminLogin;
