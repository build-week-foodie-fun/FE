import axios from "axios";

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./types";

//login action

export const login = (credentials, history) => {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    axios
      .post("/auth/login", credentials)
      .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        // set token to local storage (review console logs for correct token path)
        localStorage.setItem("token", res.data.token);
        //route to profile
        history.push("/profile");
      })
      .catch(err => {
        dispatch({ type: LOGIN_FAIL, payload: err.response });
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("token");
  };
};

export const register = (user, history) => dispatch => {
  dispatch({ type: REGISTER_START });

  axios
    .post("https://buildweek-foodie1.herokuapp.com/auth/register", user)
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS });
      history.push("/login");
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response });
    });
};
