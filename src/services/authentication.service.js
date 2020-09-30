import axios from "axios";
import { authHeader, baseUrl } from "../utils";

export const authenticationService = { login, register, logout };

login = async ({ username, password }) => {
  const body = JSON.stringify({ username, password });

  return await axios
    .post(`${baseUrl.get()}/api/auth/signin`, body, {
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

  return await axios.post(`${baseUrl.get()}/api/auth/signup`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
