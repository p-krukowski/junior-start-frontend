import axios from "axios";
import { authHeader } from "../utils";
import { API_BASE_URL } from "../constants";

export const authenticationService = { login, register, logout };

login = async ({ username, password }) => {
  const body = JSON.stringify({ username, password });

  return await axios
    .post(`${API_BASE_URL}/api/auth/signin`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user.data.accessToken));

      return user;
    });
};

logout = async () => {
  await localStorage.removeItem("user");
};

register = async (user) => {
  const body = JSON.stringify(user);

  return await axios.post(`${API_BASE_URL}/api/auth/signup`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
