import React from 'react';
import { Container, Rating } from 'semantic-ui-react';

const StarRating = () => {

  let rating = {
    "--rating": 3.4,
  };

  return (
    <div className='starContainer'>
      <div className='star' style={{...rating}}>
        {/* {console.log('rating: ', rating)} */}
      </div>
    </div>
  )
};

export default StarRating;