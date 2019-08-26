import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://buildweek-foodie1.herokuapp.com",
    headers: {
      Authorization: token,
    },
  });
};
