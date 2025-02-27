import axios from "axios";

export const Api = axios.create({
  baseURL: "https://blog-api-t6u0.onrender.com/posts",
});
