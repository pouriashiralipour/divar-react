import api from "src/configs/api";

const getProfile = async () => {
  return await api.get("/user/whoami").then((res) => res || false);
};

export { getProfile };
