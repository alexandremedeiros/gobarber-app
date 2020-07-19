import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333/',
  baseURL: 'https://nodedeploy.sharksystems.com.br/',
});

export default api;
