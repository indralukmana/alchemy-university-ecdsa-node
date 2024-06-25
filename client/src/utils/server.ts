import axios from "axios";
export const baseURL = import.meta.env.VITE_API_URL;

const server = axios.create({
  baseURL,
});

export default server;
