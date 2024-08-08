import FETCH from "../fetch";

export const adminLoginApi = (body) =>
   FETCH({
      method: "POST",
      path: "/admin/authenticate",
      withToken: false,
      body: body,
   });
