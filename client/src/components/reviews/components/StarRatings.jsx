import React from 'react';

const StarRating = (props) => {

  let rating = {
    "--rating": props.rating,
  };

  return (
    <div className='starContainer'>
      <div className='star' style={{...rating}}>
      </div>
    </div>
  )
};

export default StarRating;

