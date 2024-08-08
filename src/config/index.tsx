import { PATH } from "./routes";

export const JWT = "accessToken";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const LANG = "lang";

export const style = {
   TEXT_COLOR_NORMAL: "#222222",
   TEXT_COLOR_TITLE: "#343842",
   TEXT_COLOR_GENERAL: "#203556",
   HEADER_HOVER_COLOR: "#fcf1e5",
   HEADER_ACTIVE_COLOR: "#000000",
   TEXT_COLOR_FOOTER: "#353535",
   TEXT_HIGHLIGHT_COLOR: "rgb(0, 0, 0, 0.1)",
   SOCIAL_ICON_COLOR: "#061B506E",
   TEXT_COLOR_ERROR: "#D63637",
   TEXT_COLOR_SUB_FOOTER: "#313131",
   TEXT_LIST_EXPAND_COLOR: "#56676D",
   FACEBOOK_COLOR: "#0866FF",
   TWITTER_COLOR: "#447ff5",
   PINTEREST_COLOR: "#e60023",
   EMAIL_COLOR: "#00d084",
};

export const FONT_FAMILY = {
   JOST: "Jost",
   OUTFIT: "Outfit",
   MONTSERRAT: "Montserrat",
};

export const BREAK_POINT = {
   XS: 0,
   SM: 600,
   MD: 900,
   LG: 1200,
   XL: 1536,
};

export const headerData = [
   {
      name: "TRANG CHỦ",
      link: PATH.HOME,
   },
   {
      name: "GIỚI THIỆU",
      link: PATH.ABOUT,
   },
   {
      name: "DỊCH VỤ",
      link: PATH.SERVICE,
   },
   {
      name: "TIN TỨC",
      link: PATH.NEWS,
   },
   {
      name: "LIÊN HỆ",
      link: PATH.CONTACT,
   },
];