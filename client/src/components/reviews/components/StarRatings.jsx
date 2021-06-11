import React from 'react';
import { Container, Rating } from 'semantic-ui-react';

const RatingExampleStar = () => (
  <Container >
    <Rating className="" icon='star' defaultRating={0.5} maxRating={5} />
    {/* <div className='star-rating'>***************************</div> */}
  </Container>
);

export default RatingExampleStar;