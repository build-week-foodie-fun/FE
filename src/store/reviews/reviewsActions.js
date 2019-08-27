import { axiosWithAuth } from "../../utils";

import {
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  DELETE_REVIEW_START,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILURE,
  EDIT_REVIEW_START, 
  EDIT_REVIEW_SUCCESS, 
  EDIT_REVIEW_FAIL,
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

// Edit Review Axios Request

export const updateReview = (id, history, review) => {
  return dispatch => {
    dispatch({ type: EDIT_REVIEW_START});
    axiosWithAuth()
      .put(`/reviews/${id}`, review )
      .then(res => {
        dispatch({ type: EDIT_REVIEW_SUCCESS, payload: res.data});
        history.push('/profile');
      })
      .catch(err => {
        dispatch({ type: EDIT_REVIEW_FAIL, payload: err.response});
      })
  }
}
