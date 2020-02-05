import axios from 'axios';
import { message, notification } from 'antd';
import qs from 'qs';
import LocalStorage, {
  Crypto,
  getToken,
  localStorageKey,
} from './LocalStorage';
import routes from './Routes';

const isOnline = require('is-online');

const baseUrl = "http://localhost:3001/";

const GET = 'GET';
const DELETE = 'DELETE';
const POST = 'POST';
const PUT = 'PUT';
const PATCH = 'PATCH';

let cache = [];
const cancel = [];
const ACTION_HANDLERS = {
  [GET]: (url, data) => {
    let queryUrl = url;
    if (data !== undefined) {
      const query = qs.stringify(data);
      queryUrl = `${queryUrl}?${query}`;
    }
    return axios.get(baseUrl + queryUrl, {
      cancelToken: new axios.CancelToken((c) => {
        cancel.push({ url, c });
      }),
    });
  },
  [DELETE]: (url, data) => axios.delete(baseUrl + url, { data }),
  [POST]: (url, data) =>
    axios.post(baseUrl + url, data),
  [PUT]: (url, data) =>
    axios.put(baseUrl + url, data),
  [PATCH]: (url, data) =>
    axios.patch(baseUrl + url, data),
};

export const setHeaders = (contentType, authToken) => {
  // set auth token

  if (authToken) {
    const token = getToken();
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }

  // set contentType
  if (contentType) {
    axios.defaults.headers.post['Content-Type'] = contentType;
    axios.defaults.headers.post.Accept = 'application/json';
  } else {
    delete axios.defaults.headers.post['Content-Type'];
  }
};

export const showErrorAsToast = (error, type) => {
  if (
    error.response &&
    Object.prototype.hasOwnProperty.call(error.response, "data")
  ) {
    const value = error.response.data;
    if (Object.prototype.hasOwnProperty.call(value, "errors")) {
      const { errors } = value;
      Object.keys(errors).forEach(x => {
        if (typeof errors[x] === "object") {
          Object.keys(errors[x]).forEach(y => {
            return notification.error({ message: errors[x][y] });
          });
        } else if (errors[x].length) {
          //  return( errors[x].map(e => message.error(e)))
        }
      });
    }
    if (value.message !== undefined) {
      if (typeof value.message === "string") {
        return notification.error({ message: value.message });
      } 
        return Promise.reject(value.message);
      
    }
  } else if (type.toUpperCase() !== "GET") {
    return message.error("Something went wrong, Please do try again !");
  }

  if (Object.prototype.hasOwnProperty.call(error.response, "data")) {
    const value = error.response.data;
    if (value.data) {
      if (Object.prototype.hasOwnProperty.call(value.data, "phone_verified")) {
        return Promise.reject(error.response.data);
      }
    }
  }
  if (error.response.status === 401) {
    LocalStorage.clean();
    window.location.href = routes.login;
  }
  cache = [];
  return Promise.reject(error.response.data.message);
};

export const fetchUrl = (
  type,
  url,
  data,
  authToken = true,
  fetchBaseResponse = false,
  contentType,
) => {
  setHeaders(contentType, authToken);
  if (type.toUpperCase() === 'GET') {
    if (cache.indexOf(url) !== -1) {
      const controller = cancel.filter(i => i.url === url);
      controller.map(item => item.c());
    } else {
      cache.push(url);
    }
  }
  const handler = ACTION_HANDLERS[type.toUpperCase()];
  return !fetchBaseResponse
    ? handler(url, data)
      .then(res => Promise.resolve(res.data))
      .catch(error => showErrorAsToast(error, type))
    : handler(url, data);
};
