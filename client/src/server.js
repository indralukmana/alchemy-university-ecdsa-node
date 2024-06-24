import axios from "axios";
export const baseURL = import.meta.env.REACT_APP_API_URL;

const server = axios.create({
  baseURL,
});

export default server;
