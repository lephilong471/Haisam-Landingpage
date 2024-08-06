import FETCH from '../fetch';

export const adminLoginApi = (body: { username: string; password: string }) =>
  FETCH({
    method: 'POST',
    path: '/admin/authenticate',
    // headers:{
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Headers': '*',
    //   'Access-Control-Allow-Origin': '*',
    // },
    withToken: false,
    body: body
  });