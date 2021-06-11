import React from "react";
import { Card, Icon, Image, Rating } from "semantic-ui-react";

const CardComponent = ({ product }) => (
  <Card>
    <Image
      src="https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      wrapped
      ui={true}
    />
    <Card.Content>
      <Card.Meta>{product.category}</Card.Meta>
      <Card.Header>{product.name}</Card.Header>
      <Card.Description>
        {"$"}
        {product.default_price}
      </Card.Description>
      <Rating defaultRating={3} maxRating={5} disabled />
    </Card.Content>
  </Card>
);

export default CardComponent;
