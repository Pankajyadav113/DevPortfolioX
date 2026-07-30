import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const sendContactMessage = (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return API.post("/contact", data);
};