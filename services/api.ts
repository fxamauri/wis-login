import axios from 'axios';

export const baseURL = 'https://run.mocky.io/v3';

const api = axios.create({
  baseURL,
  timeout: 3000,
});

export default api;
