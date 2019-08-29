import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

export default function ReviewCard (props) {
  const { id, resName, itemName, itemImgUrl, foodRating, price} = props;
  return (
    <Card>
        <CardMedia
            image={itemImgUrl}
            />
      {/*<img src={itemImgUrl} alt={itemName} />*/}
      <CardContent>
      </CardContent>
      <h3>{resName}</h3>
      <p>{itemName}</p>
      <h3>{price}</h3>
      <h4>{foodRating}</h4>
      <Link to={`/profile/review/${id}`}>
        <h4>...</h4>
      </Link>
    </Card>
  )
}