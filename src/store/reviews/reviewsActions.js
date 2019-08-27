import { axiosWithAuth } from "../../utils";

import {
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  DELETE_REVIEW_START,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILURE,
} from "./types";

//Add review

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

//Delete review

export const deleteReview = id => {
  return dispatch => {
    dispatch({
      type: DELETE_REVIEW_START,
    });
    axiosWithAuth()
      .delete(`/reviews/${id}`)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: DELETE_REVIEW_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err =>
        dispatch({
          type: DELETE_REVIEW_FAILURE,
          payload: err.response,
        }),
      );
  };
};
