import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getReviews } from "../store/reviews/reviewsActions";
import { deleteReview, grabReview } from "../store/reviews/reviewsActions";
import styled from "styled-components";

const Img = styled.img`
  display: block;
  margin: 10px auto;
  width: 500px;
  border-radius: 10px;
`;

const DetailContainer = styled.div`
  width: 880px;
  margin: 20px auto;
  padding: 30px;
  font-weight: bold;
  background: #ededed;
  box-shadow: 2px, 2px, 10px, 10px #7c7c7c;
  text-align: center;
  border-radius: 10px;
`;

const ResTitle = styled.h1`
  color: #d80000;
  font-size: 3rem;
`;

const ItemTitle = styled.h2`
  color: #d80000;
  font-size: 2rem;
`;

function SingleReviewDetail(props) {
  useEffect(() => {
    props.getReviews();
  }, []);

  const review = props.reviews.find(
    review => review.id === parseInt(props.match.params.id, 10),
  );

  const handleDelete = id => {
    props.deleteReview(id);
    props.history.push("/profile");
  };

  return (
    <div className="singleDetailBox">
      {typeof review !== "undefined" && (
        <DetailContainer>
          <div>
            <ResTitle>{review.restaurant_name}</ResTitle>
            <p> {review.restaurant_type}</p>
            <ItemTitle>{review.item_name}</ItemTitle>
            <Img src={review.photo_of_order} alt={review.item_name} />
            <p>Date of visit: {review.date_of_visit}</p>
            <h3>Price: ${review.price.toFixed(2)}</h3>
            <h3>Food rating: {review.food_rating}</h3>
            <h4>Wait time: {review.wait_time}</h4>
            <p>Comments: {review.comments}</p>
            <p>Created at: {review.created_at}</p>
          </div>

          <button
            className="reviewBtn"
            onClick={() => props.grabReview(props.history, review)}
          >
            Edit
          </button>
          <button
            className="reviewBtn"
            onClick={() => handleDelete(props.match.params.id)}
          >
            Delete
          </button>
        </DetailContainer>
      )}
    </div>
  );
}

const mapPropsToState = state => {
  return {
    reviews: state.reviews.reviews,
  };
};

export default connect(
  mapPropsToState,
  { getReviews, deleteReview, grabReview },
)(SingleReviewDetail);
