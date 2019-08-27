import {

    ADD_REVIEW_START,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAILURE,
    DELETE_REVIEW_START,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAILURE,
    GET_REVIEWS_START,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAILURE,

} from "./types";

const initialState = {
    reviews: [],
    error: "",
    isLoading: false,
};

const reducers = (state = initialState, {type, payload}) => {
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
                reviews: payload,
                isLoading: false,
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
