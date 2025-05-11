import axios from "axios";
import { setupInterceptors } from "./interceptor";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout:1000*10
});

setupInterceptors(axiosInstance);

export default axiosInstance;