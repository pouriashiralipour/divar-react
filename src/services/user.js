import api from "src/configs/api";

const getProfile = async () => {
  return await api.get("/user/whoami");
};

export { getProfile };
