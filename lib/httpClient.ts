import axios from "axios";
export const baseURL =
  process.env.NEXT_PUBLIC_API_URL || "http://192.168.100.177:3001/api/v1";
export const http = axios.create({
  baseURL,
  withCredentials: true,
});
