import {
    DELETE_REVIEW_START,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAILURE
} from "./types";

const initialState = {
    reviews: [],
    error: "",
    isLoading: false,
};

const reducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case DELETE_REVIEW_START:
            return {...state, error: "", isLoading: true};
        case DELETE_REVIEW_SUCCESS:
            return {...state, error: "", reviews: payload, isLoading: false };
        case DELETE_REVIEW_FAILURE:
            return {...state, error: payload.data.error, isLoading: false};
        default:
            return state;
    }
};

export default reducers;
