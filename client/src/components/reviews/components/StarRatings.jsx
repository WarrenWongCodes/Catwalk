import React from 'react';
import { Container, Rating } from 'semantic-ui-react';

const RatingExampleStar = () => {

  let rating = {
    "--rating": 3.5,
  };

  return (
    <div className='starContainer'>
      <div className='star' style={{...rating}}>
        {/* {console.log('rating: ', rating)} */}
      </div>
    </div>
  )
};

export default RatingExampleStar;