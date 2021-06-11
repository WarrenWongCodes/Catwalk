import React from 'react';
import { Container, Rating } from 'semantic-ui-react';

const RatingExampleStar = () => (
  <Container >
    <Rating  icon='star' defaultRating={0.5} maxRating={5} />

  </Container>

)

export default RatingExampleStar;

