import React, {useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";
import {connect} from "react-redux";

function ReviewList(props) {
    return (
        <div>
            {console.log('reviews', props.reviews)}
            {props.reviews.length > 0 && props.reviews.map(item => {
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
            ;
        </div>
    );
}

const mapPropsToState = state => {
    return {
        reviews: state.reviews.reviews,
    }
};

export default connect(mapPropsToState, {})(ReviewList);
