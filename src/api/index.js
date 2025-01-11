import axios from "axios";

const BASE_URL = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: BASE_URL,
  headers,
});

export const $get = async (path, id) => {
  try {
    const url = id ? `${path}/${id}` : path;
    const { data } = await instance.get(url);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
