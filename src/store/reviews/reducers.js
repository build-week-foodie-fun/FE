import {
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
} from "./types";

const initialState = {
  reviews: [],
  error: "",
  isLoading: false,
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
    default:
      return state;
  }
};

export default reducers;
