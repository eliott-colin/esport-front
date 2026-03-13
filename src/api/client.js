import axios from "axios";

export const api = axios.create({
  baseURL: "http://213.156.132.215:8080/api/v1/",
});

let interceptorId = null;

export function setupInterceptors(logoutFn) {
  if (interceptorId !== null) {
    api.interceptors.response.eject(interceptorId);
  }

  interceptorId = api.interceptors.response.use(
    (response) => {
      if (
        response.data?.status === "FAILED" &&
        response.data?.message === "Token invalide ou expiré"
      ) {
        logoutFn();
        window.location.href = "/finalfocus/login";
        return Promise.reject(new Error(response.data.message));
      }
      return response;
    },
    (error) => {
      const data = error.response?.data;
      if (
        data?.status === "FAILED" &&
        data?.message === "Token invalide ou expiré"
      ) {
        logoutFn();
        window.location.href = "/finalfocus/login";
      }
      return Promise.reject(error);
    },
  );
}
