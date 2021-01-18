import axios from 'axios';

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error.response.status === 400) {
      alert("status code 400, message: " + error.response.data?.messages);
    }

    if (error.response.status === 401) {
      alert("status code 401, message: " + error.response.data?.messages);
    }

    if (error.response.status === 403) {
      alert("status code 403, message: " + error.response.data?.messages);
    }

    if (error.response.status === 404) {
      alert("status code 404, message: " + error.response.data?.messages);
    }

    if (error.response.status === 500) {
      alert("status code 500, message: " + error.response.data?.message);
    }

    return Promise.reject(error.response);
  }
);