import api from "src/configs/api";
import { getCookie } from "src/utils/cookie";

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return Promise.reject("No refresh token available");
  try {
    const response = await api.post("/auth/check-refresh-token", {
      refreshToken,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getNewTokens;
