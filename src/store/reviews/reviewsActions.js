import {axiosWithAuth} from "../../utils";

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

//Add review

export const addReview = (history, review) => dispatch => {
    dispatch({type: ADD_REVIEW_START});

    axiosWithAuth()
        .post("/auth/api", review)
        .then(res => {
            dispatch({type: ADD_REVIEW_SUCCESS, payload: res.data});
            // Re-route to main display
            history.push("/dashboard");
        })
        .catch(err => {
            dispatch({type: ADD_REVIEW_FAILURE, payload: err.response});
        });
};


//Delete review

export const deleteReview = id => {
    return dispatch => {
        dispatch({
            type: DELETE_REVIEW_START,
        });
        axiosWithAuth()
            .delete(`/api/${id}`)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: DELETE_REVIEW_SUCCESS,
                    payload: id
                });
            })
            .catch(err => dispatch({
                type: DELETE_REVIEW_FAILURE,
                payload: err.response
            }));
    }
};

//Get All reviews

export const getReviews = () => {
    return dispatch => {
        dispatch({type: GET_REVIEWS_START});
        axiosWithAuth()
            .get('/auth/api')
            .then(res => {
                console.log("get reviews", res.data);
                dispatch({
                    type: GET_REVIEWS_SUCCESS,
                    payload: res.data
                });
            })
            .catch(err => dispatch({
                type: GET_REVIEWS_FAILURE,
                payload: err.response
            }));
    }
};