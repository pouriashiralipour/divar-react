import axios from "axios";
import getNewTokens from "src/services/token";
import { getCookie, setCookie } from "src/utils/cookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginalRequest = error.config;
    if (error.response.status === 401 && !orginalRequest._retry) {
      orginalRequest._retry = true;

      const res = await getNewTokens();
      if (!res) return Promise.reject("Failed to refresh token");
      setCookie(res);
      orginalRequest.headers["Authorization"] = `bearer ${res.accessToken}`;
      return api(orginalRequest);
    }
  },
);

export default api;
