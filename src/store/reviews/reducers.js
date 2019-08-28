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
} from "./types";

const initialState = {
  reviews: [],
  error: "",
  isLoading: false,
  activeReview: [],
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
      return {
        ...state,
        error: "",
        reviews: payload,
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
        activeReview: state.reviews.filter(review => review.id === payload.id)
      }
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
        activeReview: [],
      };
    case EDIT_REVIEW_FAIL:
      return {
        ...state,
        error: payload.data.error,
        isLoading: false,
      }
    default:
      return state;
  }
};

export default reducers;
