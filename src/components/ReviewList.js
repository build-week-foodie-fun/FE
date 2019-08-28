import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewList(props) {
  return (
    <div>
      {props.reviews.map(item => {
        {
          /* Maybe make this a <Link> to /profile/review/${item.id} */
        }
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
