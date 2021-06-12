import React, { CSSProperties } from 'react';
import { Container, Rating } from 'semantic-ui-react';

const RatingExampleStar = () => {

  let rating = {
    "--rating": 2.3,
  };


  // <Container >
  return (
    <div className='starContainer'>
      <div className='star' style={{...rating}}>
        {console.log('rating: ', rating)}
      {/* &#9734;
      &#9734;
      &#9734;
      &#9734;
      &#9734; */}
      </div>
    </div>
  )

  // </Container>
};

export default RatingExampleStar;