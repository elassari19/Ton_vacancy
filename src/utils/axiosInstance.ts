import axios from "axios";

const BASE_URL = `${process.env.BASE_URL}`;

let authorize = localStorage.getItem("vacancy")
  ? // @ts-ignore
    JSON.parse(localStorage.getItem("vacancy"))
  : null;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    // "content-type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${authorize?.token}`,
  },
});

export default axiosInstance;
