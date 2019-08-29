import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getReviews} from "../store/reviews/reviewsActions";
import {deleteReview} from "../store/reviews/reviewsActions";

function SingleReviewDetail(props) {
    useEffect(() => {
        props.getReviews();
    }, [props.reviews]);

    const review = props.reviews.find(
        review => review.id === parseInt(props.match.params.id, 10)
    );

    const handleDelete = (id) =>{
        props.deleteReview(id);
        props.history.push('/profile');
    };

    return (
        <div>
            {typeof review !== 'undefined' && (
                <div>
                    <h1>{review.restaurant_name}</h1>
                    < p> {review.restaurant_type}</p>
                    <h3>{review.item_name}</h3>
                    <img src={review.photo_of_order} alt={review.item_name}/>
                    <p>Date of visit: {review.date_of_visit}</p>
                    <h3>Price: ${review.price}</h3>
                    <h3>Food rating: {review.food_rating}</h3>
                    <h4>Wait time: {review.wait_time}</h4>
                    <p>Comments: {review.comments}</p>
                    <p>Created at: {review.created_at}</p>
                </div>
            )}

            <button>Edit</button>
            <button onClick={() => handleDelete(props.match.params.id)}>Delete</button>
        </div>
    );
}

const mapPropsToState = state => {
    return {
        reviews: state.reviews.reviews,
    }
};
export default connect(mapPropsToState, {getReviews, deleteReview})(SingleReviewDetail);