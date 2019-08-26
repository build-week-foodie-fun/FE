import {axiosWithAuth} from "../../utils/axiosWithAuth";


import {
    DELETE_REVIEW_START,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAILURE
} from "./types";


//Delete Friend

export const deleteReview = (id) => {
    return dispatch => {
        dispatch({type: DELETE_REVIEW_START});
        axiosWithAuth()
            .delete(`reviews/${id}`)
            .then(res => {
                console.log(res.data);
                dispatch({type: DELETE_REVIEW_SUCCESS, payload: res.data});
            })
            .catch(err => dispatch({type: DELETE_REVIEW_FAILURE, payload: err.response}));
    }
};