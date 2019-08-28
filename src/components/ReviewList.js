import React, { useState, useEffect } from "react";
// import { Link, Route } from "react-router-dom";
// import axios from "axios";
import ReviewCard from "./ReviewCard";
// import SingleReviewDetail from "./SingleReviewDetail"

export default function ReviewList(props) {
  // const [reviews, setReviews] = useState([]);

  // useEffect(()=> {
  //   axios
  //     .get('https://buildweek-foodie1.herokuapp.com/public/')
  //     .then(res => {
  //       console.log(res.data);
  //       setReviews(res.data)
  //     })
  // },[])
  
  return (
    <div>
      {props.reviews.map(item => {
        return (
          <ReviewCard 
            key={item.id}
            id={item.id}
            resName={item['restaurant_name']}
            itemName={item['item_name']}
            itemImgUrl={item['photo_of_order']}
            foodRating={item['food_rating']}
            price={item.price}
          />
        );
      })};
      {/* <Route 
        path="/profile/review/:id"
        render={props => <SingleReviewDetail {...props} reviews={reviews} />}
      /> */}
    </div>
  )
}

