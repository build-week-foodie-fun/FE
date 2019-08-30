import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

export default function ReviewCard(props) {
    const {id, resName, itemName, itemImgUrl, foodRating, price} = props;
    return (
      <Card key={id}>
      <Image src={itemImgUrl} wrapped ui={false} />
      
      <Card.Content>
        <Card.Header>{resName}</Card.Header>
        <Card.Meta>{itemName}</Card.Meta>
        <Card.Description>
          {`Price: $${price.toFixed(2)}`} <br />
          {`Rating: ${foodRating}`}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Link to={`/profile/review/${id}`}>
          <Icon name="linkify" />
          More Info
        </Link>
      </Card.Content>
    </Card>
  );
}
