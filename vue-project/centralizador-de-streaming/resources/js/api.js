import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL;

const object = axios.create({
  baseURL: API_URL,
});
export default object;