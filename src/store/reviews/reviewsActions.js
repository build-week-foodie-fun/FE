import { axiosWithAuth } from "../../utils";

import {
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
} from "./types";

export const addReview = (history, review) => dispatch => {
  dispatch({ type: ADD_REVIEW_START });

  axiosWithAuth()
    .post("/auth/api", review)
    .then(res => {
      dispatch({ type: ADD_REVIEW_SUCCESS, payload: res.data });
      // Re-route to main display
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({ type: ADD_REVIEW_FAILURE, payload: err.response });
    });
};
