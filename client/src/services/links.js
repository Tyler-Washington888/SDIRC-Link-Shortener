import api from "./apiConfig";

export const getLinks = async () => {
  try {
    const response = await api.get("/api/links");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMyLinks = async (email) => {
  try {
    const response = await api.get("/api/links/myLinks", email);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createLink = async (post) => {
  try {
    const response = await api.post("/api/links/", post);
    return response.data;
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */

      return error.response.data;
      console.log(error.response.data);
      console.log(error.response.status);
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

export const updateLink = async (id, post) => {
  try {
    const response = await api.put(`/api/links/${id}`, post);
    return response.data;
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */

      return error.response.data;
      console.log(error.response.data);
      console.log(error.response.status);
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

export const deleteLink = async (id) => {
  try {
    const response = await api.delete(`/api/links/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
