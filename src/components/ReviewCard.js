import React from "react";
import { Link } from "react-router-dom";

export default function ReviewCard (props) {
  const { id, resName, itemName, itemImgUrl, foodRating, price} = props;
  return (
    <div>
      <img src={itemImgUrl} alt={itemName} />
      <h3>{resName}</h3>
      <p>{itemName}</p>
      <h3>{price}</h3>
      <h4>{foodRating}</h4>
      <Link to={`/profile/review/${id}`}>
        <h4>...</h4>
      </Link>
    </div>
  )
}