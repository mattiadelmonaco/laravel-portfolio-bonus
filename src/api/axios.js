import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.BE_URL,
  timeout: 5000,
});

export default instance;
