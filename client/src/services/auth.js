import api from "./apiConfig";

export const loginUser = async (loginData) => {
  try {
    const res = await api.post("/api/users/login", loginData);
    localStorage.setItem("authToken", res.data.token);
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log("Error", error.message);
    }
  }
};

export const createUser = async (registerData) => {
  const res = await api.post("/api/users/", registerData);
  localStorage.setItem("authToken", res.data.token);

  return res.data;
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const resp = await api.get("/api/users/verify");
    return resp.data;
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
