import axios from 'axios';
import config from '../config';

const client = axios.create(config.api);

// Request interceptor
client.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
client.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

const commonService = {
  getData(params) {
    return client.request({
      method: 'get',
      url: '/',
      params,
    });
  },
};

const authService = {
  getAuth(params) {
    return client.request({
      method: 'get',
      url: '/',
      params,
    });
  },
};

export { commonService, authService };
