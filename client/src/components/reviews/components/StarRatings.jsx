import React from 'react';
import '../styles/reviews.css';

const StarRating = (props) => {

  let rating = {
    "--rating": props.rating,
  };

  return (
    <div className='starContainer' >
      <div className='star' style={{ ...rating }}>
      </div>
    </div>
  )
};

export default StarRating;

