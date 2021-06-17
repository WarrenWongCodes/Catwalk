import React from 'react';
import '../styles/reviews.css';
import star from "../../../styles/global/star.css"

const StarRating = (props) => {
  // console.log("Props from StarRating", props);

  let rating = {
    "--rating": props.rating,
  };

  return (
    <div className='starContainer' >
      <div className='star' style={{ ...rating }}>
      </div>
    </div>
  );
};

export default StarRating;
