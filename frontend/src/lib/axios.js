import axios from "axios";

// Use the deployed backend URL
const BASE_URL = "https://notetake-kl4m.vercel.app/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
