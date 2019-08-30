import { axiosWithAuth } from "../../utils/axiosWithAuth";

import {
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  DELETE_REVIEW_START,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILURE,
  GRAB_REVIEW,
  EDIT_REVIEW_START,
  EDIT_REVIEW_SUCCESS,
  EDIT_REVIEW_FAIL,
  GET_REVIEWS_START,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
} from "./types";

//Add review

export const addReview = (review, history) => dispatch => {
  dispatch({ type: ADD_REVIEW_START });
  axiosWithAuth()
    .post("/auth/api", review)
    .then(res => {
      // console.log("Add success: ", res, res.data);
      dispatch({ type: ADD_REVIEW_SUCCESS, payload: review });
      // Re-route to main display
      history.push("/profile");
    })
    .catch(err => {
      dispatch({ type: ADD_REVIEW_FAILURE, payload: err.response });
    });
};

//Delete review

export const deleteReview = (id, history) => {
  return dispatch => {
    dispatch({
      type: DELETE_REVIEW_START,
    });
    axiosWithAuth()
      .delete(`/auth/api/${id}`)
      .then(res => {
        // console.log(res.data);
        dispatch({
          type: DELETE_REVIEW_SUCCESS,
          payload: id,
        });
        history.push("/profile");
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

export const grabReview = (history, review) => dispatch => {
  dispatch({ type: GRAB_REVIEW, payload: review });
  history.push("/profile/reviewForm");
};

export const editReview = (review, history, id) => {
  return dispatch => {
    dispatch({ type: EDIT_REVIEW_START });
    axiosWithAuth()
      .put(`/auth/api/${id}`, review)
      .then(res => {
        dispatch({ type: EDIT_REVIEW_SUCCESS, payload: res.data });
        history.push("/profile");
      })
      .catch(err => {
        dispatch({ type: EDIT_REVIEW_FAIL, payload: err.response });
      });
  };
};

//Get All reviews

export const getReviews = () => {
  return dispatch => {
    dispatch({ type: GET_REVIEWS_START });
    axiosWithAuth()
      .get("/auth/api")
      .then(res => {
        // console.log("get reviews", res.data);
        dispatch({
          type: GET_REVIEWS_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err =>
        dispatch({
          type: GET_REVIEWS_FAILURE,
          payload: err.response,
        }),
      );
  };
};
