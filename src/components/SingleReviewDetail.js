import React, { useEffect, useState } from "react";
import axios from "axios";


export default function SingleReviewDetail (props) {
  console.log(props.reviews)
  const review =props.reviews.find(review => {
    return `${review.id}` === props.match.params.id});
  console.log('review',review)

  
  const { comments, created_at, date_of_visit, food_rating, item_name, photo_of_order, price, restaurant_name, restaurant_type, wait_time  } = review;
   
  return (
    <div>
      <h1>{restaurant_name}</h1>
      <p>{restaurant_type}</p>
      <h3>{item_name}</h3>
      <img src={photo_of_order} alt={item_name} />
      <p>Date of visit: {date_of_visit}</p>
      <h3>Price: ${price}</h3>
      <h3>Food rating: {food_rating}</h3>
      <h4>Wait time: {wait_time}</h4>
      <p>Comments: {comments}</p>
      <p>Created at: {created_at}</p>
      <button onClick={props.grabReview()}>Edit</button>
      <button>Delete</button>
    </div>
  );  
}