import axios from "axios";
const CLIENT_URL = "https://todo-olbc.onrender.com/api";
export const request = axios.create({
  baseURL: CLIENT_URL,
  withCredentials: true,
});
