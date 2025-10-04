import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://192.168.100.177:3001/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
