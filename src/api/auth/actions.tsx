import FETCH from "../fetch";

export const adminLoginApi = (body) =>
   FETCH({
      method: "POST",
      path: "/admin/authenticate",
      withToken: false,
      body: body,
   });

export const sendContact = (body) =>
   FETCH({
      method: "POST",
      path: "/admin/request-submit",
      withToken: false,
      body: body,
   });
