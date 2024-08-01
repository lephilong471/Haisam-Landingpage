import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "./custom.css";

import Header from "@/app/components/Home/Header";
import BgImg from "@/public/static/bg-image.jpg";
import { Box } from "@mui/material";
import Footer from "./components/Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Hải Sâm Logistics",
   description: "Công ty TNHH Logistics Hải Sâm",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            {/* Link tới Bootstrap CSS */}
            <link
               rel="stylesheet"
               href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
               integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
               crossOrigin="anonymous"
            />

            {/* Bootstrap và các dependencies JavaScript */}
            <script
               src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
               integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
               crossOrigin="anonymous"
               defer
            ></script>
            <script
               src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
               integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
               crossOrigin="anonymous"
               defer
            ></script>
            <script
               src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
               integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
               crossOrigin="anonymous"
               defer
            ></script>
         </head>
         <body className={inter.className}>
            <Box
               style={{
                  // backgroundImage: `url(${BgImg.src})`,
                  height: "100vh",
                  minHeight: "100vh",
                  maxHeight: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "scroll",
               }}
            >
               <Header />
               {children}
            </Box>
            <Footer />
         </body>
      </html>
   );
}
