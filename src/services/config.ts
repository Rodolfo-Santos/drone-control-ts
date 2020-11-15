import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://services.solucx.com.br/mock/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});
