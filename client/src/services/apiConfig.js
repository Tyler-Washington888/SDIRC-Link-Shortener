import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://sdirc-backend-deploy.herokuapp.com/"
      : "http://localhost:5000",
});

export default api;
