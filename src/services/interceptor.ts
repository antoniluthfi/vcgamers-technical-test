import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const interceptor: AxiosInstance = axios.create({
  // baseURL: 'https://pokeapi.co/api/v2'
});

const handleResponseSuccess = (response: AxiosResponse) => {
  return response;
};

const handleResponseError = (error: any) => {
  return Promise.reject(error);
};

const handleRequest = (config: AxiosRequestConfig) => {
  return config;
};

interceptor.interceptors.response.use(handleResponseSuccess, handleResponseError);
interceptor.interceptors.request.use(handleRequest as any);

export default interceptor;
