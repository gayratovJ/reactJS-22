import axios from "axios";
import { message } from "antd";

const request = axios.create({
  baseURL: "https://ap-vodiy-parfum-backend.up.railway.app/api/v1/",
  timeout: 10000,
});

request.interceptors.response.use(
  (response) => response,
  (err) => {
    message.error(err.response.data.msg);
    return Promise.reject(err);
  }
);

export default request;
