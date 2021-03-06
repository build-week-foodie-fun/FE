import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { connect } from "react-redux";
import { getReviews } from "../store/reviews/reviewsActions";

function ReviewList(props) {
  const userId = parseInt(localStorage.getItem("user_id"));
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    let filteredReviews = props.reviews.filter(review => {
      return userId === review.user_id;
    });
    setUserReviews(filteredReviews);
  }, [props.reviews, userId]);

  return (
    <div className="grid-view">
      {userReviews.length > 0 &&
        userReviews.map(item => {
          return (
              <ReviewCard
                key={item.id}
                id={item.id}
                resName={item["restaurant_name"]}
                itemName={item["item_name"]}
                itemImgUrl={item["photo_of_order"]}
                foodRating={item["food_rating"]}
                price={item.price}
              />
          );
        })}
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
  { getReviews },
)(ReviewList);
