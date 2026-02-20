import axios from "axios";

export const api = axios.create({
  baseURL: "http://213.156.132.215:8080/api/v1/",
});
