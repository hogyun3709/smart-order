import store from '@/store';

export function setInterceptors(axiosService) {
  axiosService.interceptors.request.use(
    (config) => {
      config.headers.Authorization = store.state.token;
      return config;
    },
    (error) => Promise.reject(error),
  );
}
