import FETCH from '../fetch';

export const adminLoginApi = (body: { username: string; password: string }) =>
  FETCH({
    method: 'POST',
    path: '/admin/authenticate',
    withToken: false,
    body: body
  });