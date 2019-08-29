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

const initialState = {
  reviews: [],
  error: "",
  isLoading: false,
  activeReview: null,
  user: "",
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_REVIEW_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case ADD_REVIEW_SUCCESS:
      return {
        ...state,
        reviews: [...state.reviews, payload],
        error: "",
        isLoading: false,
      };
    case ADD_REVIEW_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    case DELETE_REVIEW_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case DELETE_REVIEW_SUCCESS:
      const newArr = state.reviews.filter(review => review.id !== payload);
      return {
        ...state,
        error: "",
        reviews: newArr,
        isLoading: false,
      };
    case DELETE_REVIEW_FAILURE:
      return {
        ...state,
        error: payload.data.error,
        isLoading: false,
      };
    case GRAB_REVIEW:
      return {
        ...state,
        error: "",
        isLoading: false,
        activeReview: payload,
      };
    case EDIT_REVIEW_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case EDIT_REVIEW_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        activeReview: null,
      };
    case EDIT_REVIEW_FAIL:
      return {
        ...state,
        error: payload.data.error,
        isLoading: false,
      };
    case GET_REVIEWS_START:
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        error: "",
        reviews: payload.data,
        isLoading: false,
        user: payload.loggedInUser,
        activeReview: null,
      };
    case GET_REVIEWS_FAILURE:
      return {
        ...state,
        error: payload.data.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducers;
