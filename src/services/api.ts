import axios from "axios";

const api = axios.create({
  baseURL: "https://api-motorshop-two.vercel.app",
});

export default api;
