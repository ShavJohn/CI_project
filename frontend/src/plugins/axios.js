import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

//axios.defaults.baseURL = process.env.API_URL;
// axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
const service = axios.create({
  baseURL: process.env.API_URL,
})

service.interceptors.request.use(
  config => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
    return config
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }
);


service.interceptors.response.use(
  response => {

      return response
  },
  error => {
      const { response } = error;
      if (response.status === 422) {
          const firstErrorIndex = Object.keys(response.data.errors)[0];
          const message = `${ response.data.message || 'Error:' } ${ response.data.errors[firstErrorIndex].msg }`;
          return Promise.reject(new Error(message || 'Error'))
      } else {
          if (response.status === 401) {

                localStorage.removeItem('access_token');
                return error
          } else {

              return Promise.reject(new Error(response.data.message || 'Error'))
          }
      }
  }
);

window.axios = service
Vue.use(VueAxios, service);
